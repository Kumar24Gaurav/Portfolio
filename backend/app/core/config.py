import os
from dotenv import load_dotenv
from pathlib import Path
from groq import Groq

from pathlib import Path

env_path = Path(__file__).resolve().parent.parent.parent/ ".env"
load_dotenv(env_path)

# Read API Key
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise ValueError("GROQ_API_KEY not found in .env")

# Default LLM
MODEL_NAME = "openai/gpt-oss-120b"

# Create Groq client
client = Groq(
    api_key=GROQ_API_KEY
)