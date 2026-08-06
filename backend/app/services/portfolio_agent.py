from app.services.resume_reader import read_resume
from app.services.resume_parser import extract_resume
from app.services.tools import get_link, search_resume
from app.core.config import client, MODEL_NAME 
from app.core.prompts import SYSTEM_PROMPT
from pathlib import Path
import json


class PortfolioAssistant:
    def __init__(self, resume_path: Path):

        resume_text = read_resume(resume_path)

        self.resume = extract_resume(resume_text)

        self.client = client

        self.model = MODEL_NAME

        self.reset_chat()
        
        self.tools = [
            {
                "type": "function",
                "function": {
                    "name": "search_resume",
                    "description": "Search Kumar Gaurav's parsed resume.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "query": {
                                "type": "string"
                            }
                        },
                        "required": ["query"]
                    }
                }
            },
            {
                "type": "function",
                "function": {
                    "name": "get_link",
                    "description": "Returns portfolio, GitHub, LinkedIn and project links.",
                    "parameters": {
                        "type": "object",
                        "properties": {
                            "query": {
                                "type": "string"
                            }
                        },
                        "required": ["query"]
                    }
                }
            }
        ]


    def reset_chat(self):
        self.messages = [
            {
                "role":"system",
                "content": SYSTEM_PROMPT
            }
        ]

    def chat(self, question: str):

        # Store user message
        self.messages.append(
            {
                "role": "user",
                "content": question
            }
        )

        # First LLM call
        response = self._call_llm()

        response_message = response.choices[0].message

        # No tool required
        if not response_message.tool_calls:

            answer = response_message.content

            self.messages.append(
                {
                    "role": "assistant",
                    "content": answer
                }
            )

            return answer

        # Save assistant tool request
        self.messages.append(response_message)

        # Execute every tool requested
        for tool_call in response_message.tool_calls:

            result = self._execute_tool(tool_call)

            self._append_tool_result(
                tool_call,
                result
            )

        # Final response after tool execution
        answer = self._generate_response()

        self.messages.append(
            {
                "role": "assistant",
                "content": answer
            }
        )

        return answer

    def _call_llm(self, use_tools=True):
        return self.client.chat.completions.create(
            model=self.model,
            messages=self.messages,
            tools=self.tools if use_tools else None,
            temperature=0,
        )

    def _execute_tool(self, tool_call):
        arguments = json.loads(
            tool_call.function.arguments
        )

        tool_name = tool_call.function.name
        if tool_name == "search_resume":
            return search_resume(
                self.resume,
                arguments["query"]
            )
        elif tool_name == "get_link":
            return get_link(
                arguments["query"]
            )

        return "Unknown tool."

    def _append_tool_result(self, tool_call, result):
        self.messages.append(
            {
                "role": "tool",
                "tool_call_id": tool_call.id,
                "content": json.dumps(result, default=str, indent=2)
            }
        )

    def _generate_response(self):
        response = self._call_llm(use_tools=False)
        return response.choices[0].message.content

    def stream_chat(self, question):
        self.messages.append(
            {
                "role": "user",
                "content": question
            }
        )

        response = self._call_llm()

        response_message = response.choices[0].message

        if not response_message.tool_calls:

            self.messages.append(response_message)

            yield from self._stream_response()
            return

        self.messages.append(response_message)

        for tool_call in response_message.tool_calls:

            result = self._execute_tool(tool_call)

            self._append_tool_result(
                tool_call,
                result
            )

        yield from self._stream_response()


    def _stream_response(self):
        stream = self.client.chat.completions.create(
            model=self.model,
            messages=self.messages,
            stream=True
        )

        for chunk in stream:
            text = chunk.choices[0].delta.content

            if text:
                yield text