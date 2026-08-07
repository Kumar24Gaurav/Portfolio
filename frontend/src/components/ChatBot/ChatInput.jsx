import { useState } from "react";
import { IoSend } from "react-icons/io5";

function ChatInput({ onSend }) {
    const [text, setText] = useState("");

    const handleSend = () => {
        if (!text.trim()) return;

        onSend(text);

        setText("");
    };

    return (
        <div className="p-4 border-t border-white/10 bg-zinc-950">
            <div className="flex items-center gap-2">

                <input
                    type="text"
                    value={text}
                    placeholder="Ask about Kumar Gaurav..."
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSend();
                        }
                    }}
                    className="
                        flex-1
                        bg-zinc-900
                        border
                        border-zinc-700
                        rounded-full
                        px-5
                        py-3
                        text-white
                        placeholder:text-zinc-500
                        outline-none
                        focus:border-violet-500
                    "
                />

                <button
                    onClick={handleSend}
                    className="
                        w-12
                        h-12

                        rounded-full

                        bg-gradient-to-br
                        from-violet-600
                        via-fuchsia-600
                        to-purple-700

                        text-white

                        flex
                        items-center
                        justify-center

                        transition-all

                        hover:scale-110
                    "
                >
                    <IoSend size={20} />
                </button>

            </div>
        </div>
    );
}

export default ChatInput;