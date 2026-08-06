import json
from app.models.resume_models import Resume, resume_schema
from app.core.config import client, MODEL_NAME
from app.core.prompts import PARSER_PROMPT


def extract_resume(resume_text):
    
    message_system={
        "role" : "system",
        "content" : PARSER_PROMPT + f"\n\nReturn JSON matching this schema:\n{resume_schema}"
    }
    message_user={
        "role" : "user",
        "content" : f"""
            Parse the following resume.

            Resume:
            {resume_text}
        """
    }
    messages=[message_system, message_user]

    response=client.chat.completions.create(model=MODEL_NAME, messages=messages, response_format={"type": "json_object"})
    raw_output = response.choices[0].message.content
    data = json.loads(raw_output)
    resume = Resume(**data)
    return resume

