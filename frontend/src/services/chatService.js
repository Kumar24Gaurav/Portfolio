import api from "./api";

export async function sendMessage(question) {
    const response = await api.post("/chat", {
        question,
    });

    return response.data.answer;
}