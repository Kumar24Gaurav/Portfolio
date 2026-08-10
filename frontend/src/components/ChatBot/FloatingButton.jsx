import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function FloatingButton({
    onClick,
    showNotification,
    onCloseNotification
}) {
    return (
        <div className="fixed bottom-6 right-6 z-50">

            {/* Notification Bubble */}
            {showNotification && (
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 10,
                        scale: 0.9
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1
                    }}
                    exit={{
                        opacity: 0,
                        y: 10,
                        scale: 0.9
                    }}
                    transition={{
                        duration: 0.4,
                        delay: 1
                    }}
                    className="
                        absolute
                        bottom-20
                        right-0

                        w-[220px]

                        px-4
                        py-3

                        rounded-2xl

                        bg-zinc-950
                        border
                        border-violet-500/30

                        shadow-xl
                        shadow-violet-500/20

                        text-white
                    "
                >

                    {/* Close Button */}
                    <button
                        onClick={onCloseNotification}
                        className="
                            absolute
                            top-2
                            right-2

                            w-6
                            h-6

                            rounded-full

                            flex
                            items-center
                            justify-center

                            text-zinc-400

                            hover:text-white
                            hover:bg-white/10

                            transition-all
                            duration-200
                        "
                        aria-label="Close notification"
                    >
                        <IoClose size={16} />
                    </button>


                    {/* Notification Content */}
                    <div className="flex items-start gap-3 pr-4">

                        {/* Robot Icon */}
                        <div
                            className="
                                mt-1

                                w-8
                                h-8

                                rounded-full

                                bg-gradient-to-br
                                from-violet-600
                                via-fuchsia-600
                                to-purple-700

                                flex
                                items-center
                                justify-center

                                shrink-0
                            "
                        >
                            <FaRobot size={14} />
                        </div>


                        {/* Text */}
                        <div>
                            <p className="text-sm font-semibold">
                                Hi there! 👋
                            </p>

                            <p className="
                                text-xs
                                text-zinc-400
                                mt-1
                                leading-5
                            ">
                                Ask my AI assistant about Kumar Gaurav.
                            </p>
                        </div>

                    </div>


                    {/* Bubble Arrow */}
                    <div
                        className="
                            absolute
                            -bottom-2
                            right-6

                            w-4
                            h-4

                            bg-zinc-950

                            border-r
                            border-b
                            border-violet-500/30

                            rotate-45
                        "
                    />

                </motion.div>
            )}


            {/* Floating Robot Button */}
            <motion.button
                onClick={onClick}

                initial={{
                    scale: 0
                }}

                animate={{
                    scale: 1
                }}

                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: 0.5
                }}

                whileHover={{
                    scale: 1.1
                }}

                whileTap={{
                    scale: 0.95
                }}

                className="
                    w-16
                    h-16

                    rounded-2xl

                    bg-gradient-to-br
                    from-violet-600
                    via-fuchsia-600
                    to-purple-700

                    text-white

                    border
                    border-white/10

                    shadow-xl
                    shadow-violet-500/30

                    flex
                    items-center
                    justify-center

                    hover:shadow-violet-500/50

                    transition-shadow
                    duration-300
                "
            >
                <FaRobot size={28} />
            </motion.button>

        </div>
    );
}

export default FloatingButton;