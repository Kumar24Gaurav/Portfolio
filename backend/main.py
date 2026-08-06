from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.chat_routes import router as chat_router

app = FastAPI(
    title="AI Portfolio Assistant API",
    version="1.0.0"
)

#CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # React (development)
    ],
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