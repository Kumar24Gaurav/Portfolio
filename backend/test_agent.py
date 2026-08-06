from pathlib import Path

from app.services.portfolio_agent import PortfolioAssistant


def main():

    resume_path = Path("resume") / "kumargaurav.pdf"

    assistant = PortfolioAssistant(resume_path)

    print("=" * 60)
    print("AI Portfolio Assistant")
    print("Type 'exit' to quit")
    print("=" * 60)

    while True:

        question = input("\nYou: ")

        if question.lower() in ["exit", "quit"]:
            print("\nGoodbye!")
            break

        print("\nAssistant: ", end="", flush=True)

        for chunk in assistant.stream_chat(question):
            print(chunk, end="", flush=True)

        print()


if __name__ == "__main__":
    main()