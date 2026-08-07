export async function streamMessage(question, onChunk) {

    const response = await fetch(
        "http://127.0.0.1:8000/chat/stream",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                question,
            }),
        }
    );

    if (!response.body) {
        throw new Error("Streaming not supported.");
    }

    const reader = response.body.getReader();

    const decoder = new TextDecoder();

    while (true) {

        const { done, value } = await reader.read();

        if (done) break;

        const chunk = decoder.decode(value);

        onChunk(chunk);
    }
}