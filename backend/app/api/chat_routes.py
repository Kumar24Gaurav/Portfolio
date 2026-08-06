from pathlib import Path

from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.models.chat_models import (ChatRequest, ChatResponse, ResetResponse)
from app.services.portfolio_agent import PortfolioAssistant

router = APIRouter(
    prefix="/chat",
    tags=["Portfolio Assistant"]
)

BASE_DIR = Path(__file__).resolve().parent.parent.parent
resume_path = BASE_DIR / "resume" / "kumargaurav.pdf"

assistant = PortfolioAssistant(resume_path)

@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):
    answer = assistant.chat(request.question)
    return ChatResponse(answer=answer)


@router.post("/stream") 
def stream_chat(request: ChatRequest):
    return StreamingResponse(
        assistant.stream_chat(request.question),
        media_type="text/plain"
    )

@router.post("/reset", response_model=ResetResponse)
def reset_chat():
    assistant.reset_chat()
    return ResetResponse(message="Chat history has been reset successfully.")