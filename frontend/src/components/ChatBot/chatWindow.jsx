import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { IoClose } from "react-icons/io5";
import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

function ChatWindow({ messages, onSend, onClose }) {
    const messagesRef = useRef(null);

    useEffect(() => {
        if (messagesRef.current) {
            messagesRef.current.scroll({
                top: messagesRef.current.scrollHeight
            });
        }
    }, [messages]);
    return (
        <motion.div
            initial={{
                opacity: 0,
                scale: 0.9,
                y: 30
            }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0
            }}
            exit={{
                opacity: 0,
                scale: 0.9,
                y: 30
            }}
            transition={{
                duration: 0.25,
                ease: "easeOut"
            }}
            className="
            fixed
            bottom-10
            right-6

            w-[380px]
            h-[600px]

            rounded-3xl

            bg-zinc-950/80
            backdrop-blur-xl

            border
            border-white/10

            shadow-2xl
            shadow-violet-500/20

            flex
            flex-col

            overflow-hidden

            z-50
            "
        >
            {/*Header*/}
            <div
                className="
                bg-gradient-to-r
                from-violet-700
                via-fuchsia-600
                to-purple-700

                text-white

                p-4

                flex
                items-center
                justify-between

                border-b
                border-white/10
                "
            >
                <div>
                    <h2 className="font-semibold">
                        AI Portfolio Assistant
                    </h2>
                    <p className="text-sm opacity-80">
                        Ask about Kumar Gaurav
                    </p>
                </div>

                <button
                    onClick={onClose}
                    className="
                        p-2
                        rounded-full

                        transition-all
                        duration-300

                        hover:bg-white/10
                        hover:rotate-90
                    "
                >
                    <IoClose size={22} />
                </button>
            </div>

            {/**Messages */}

            <div
                ref={messagesRef}
                className="
                flex-1

                overflow-y-auto

                p-5

                space-y-4

                bg-transparent
                "
            >
                {messages.map((message, index) => (
                    <MessageBubble
                        key={index}
                        message={message}
                    />
                ))}
            </div>
            <ChatInput
                onSend={onSend}
            />


        </motion.div>
    );
}

export default ChatWindow;