import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import FloatingButton from "./FloatingButton";
import ChatWindow from "./ChatWindow";

import { streamMessage } from "../../services/streamChatService";


function ChatWidget() {

    // Chat messages
    const [messages, setMessages] = useState([
        {
            role: "assistant",
            content:
                "👋 Hello! I'm Kumar Gaurav's AI Portfolio Assistant. Ask me anything about his career, projects, skills or experience."
        }
    ]);


    // Chat window state
    const [isOpen, setIsOpen] = useState(false);


    // Loading state
    const [loading, setLoading] = useState(false);


    // Notification state
    const [showNotification, setShowNotification] = useState(true);


    // Handle sending message
    const handleSend = async (text) => {

        if (!text.trim() || loading) {
            return;
        }

        try {

            setLoading(true);


            // Add user message
            setMessages((prev) => [
                ...prev,
                {
                    role: "user",
                    content: text,
                },
            ]);


            // Add empty assistant message
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "",
                },
            ]);


            // Stream response
            await streamMessage(
                text,

                (chunk) => {

                    setMessages((prev) => {

                        const updated = [...prev];

                        const lastIndex = updated.length - 1;

                        const lastMessage = updated[lastIndex];

                        updated[lastIndex] = {
                            ...lastMessage,
                            content:
                                lastMessage.content + chunk,
                        };

                        return updated;
                    });

                }
            );

        } catch (error) {

            console.error(
                "Error sending message:",
                error
            );

            // Show error inside chatbot
            setMessages((prev) => {

                const updated = [...prev];

                const lastIndex = updated.length - 1;

                updated[lastIndex] = {
                    ...updated[lastIndex],
                    content:
                        "Sorry, something went wrong. Please try again.",
                };

                return updated;
            });

        } finally {

            setLoading(false);

        }
    };


    return (
        <>

            {/* Floating Button */}
            {!isOpen && (
                <FloatingButton

                    // Open chatbot
                    onClick={() => {

                        setIsOpen(true);

                        // Hide notification
                        setShowNotification(false);

                    }}

                    // Notification visibility
                    showNotification={showNotification}

                    // Close only notification
                    onCloseNotification={() => {

                        setShowNotification(false);

                    }}

                />
            )}


            {/* Chat Window */}
            <AnimatePresence mode="wait">

                {isOpen && (

                    <ChatWindow
                        messages={messages}
                        loading={loading}
                        onSend={handleSend}
                        onClose={() => setIsOpen(false)}
                    />

                )}

            </AnimatePresence>

        </>
    );
}

export default ChatWidget;