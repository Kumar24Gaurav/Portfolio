import { useState } from "react";
import FloatingButton from "./FloatingButton";
import ChatWindow from "./chatWindow";
import { AnimatePresence } from "framer-motion";

import { sendMessage } from "../../services/chatService";

function ChatWidget() {
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "👋 Hello! I'm Kumar Gaurav's AI Portfolio Assistant. Ask me anything about his career, projects, skills or experience."
        }
    ]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSend = async (text) => {
        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: text
            },
        ]);

        try {
            const answer = await sendMessage(text);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: answer,
                },
            ]);
        } catch (error) {
            console.error(error);

            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, something went wrong.",
                },
            ]);
        }
    };

    return (
        <>
            {!isOpen && (
                <FloatingButton
                    onClick={() => setIsOpen(true)}
                />
            )}
            <AnimatePresence mode="wait">
                {isOpen && (
                    <ChatWindow
                        messages={messages}
                        onSend={handleSend}
                        onClose={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default ChatWidget;