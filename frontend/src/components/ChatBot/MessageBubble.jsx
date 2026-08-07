import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function MessageBubble({ message }) {
    const isBot = message.role === "assistant";

    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className={`flex ${isBot ? "justify-start" : "justify-end"}`}
        >
            <div
                className={`
                    max-w-[80%]
                    rounded-2xl
                    px-4
                    py-3
                    shadow-lg
                    whitespace-pre-wrap
                    break-words
                    overflow-hidden
                    ${isBot
                        ? "bg-gradient-to-br from-violet-600 via-fuchsia-600 to-purple-700 text-white"
                        : "bg-zinc-800 text-white border border-zinc-700"
                    }
                `}
            >
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                        a: ({ href, children }) => (
                            <a
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-cyan-200 break-all"
                            >
                                {children}
                            </a>
                        ),
                    }}
                >
                    {message.content}
                </ReactMarkdown>
            </div>
        </motion.div>
    );
}

export default MessageBubble;