import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

from app.api.chat_routes import router as chat_router

load_dotenv()
local_url = os.getenv("ALLOWED_ORIGINS").split(",")

app = FastAPI(
    title="AI Portfolio Assistant API",
    version="1.0.0"
)

#CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=local_url,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

#Include routes
app.include_router(chat_router)


@app.get("/")
def root():
    return {
        "message": "AI Portfolio Assistant Backend Running"
    }

# Health check endpoint: to keep system alive
@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }