import { FaRobot } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

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
                    transition={{
                        duration: 0.35,
                        delay: 0.8
                    }}
                    className="
                        absolute
                        bottom-20
                        right-0

                        w-[230px]

                        px-4
                        py-3

                        rounded-2xl

                        bg-zinc-950

                        border
                        border-violet-500/30

                        shadow-2xl
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

                            flex
                            items-center
                            justify-center

                            rounded-full

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
                    <div className="flex items-start gap-3 pr-5">

                        {/* Robot Icon */}
                        <div
                            className="
                                w-9
                                h-9

                                mt-1

                                shrink-0

                                rounded-full

                                bg-gradient-to-br
                                from-violet-600
                                via-fuchsia-600
                                to-purple-700

                                flex
                                items-center
                                justify-center
                            "
                        >
                            <FaRobot size={15} />
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
                    damping: 20
                }}

                whileHover={{
                    scale: 1.1,
                    rotate: 6
                }}

                whileTap={{
                    scale: 0.95
                }}

                className="
                    relative

                    w-16
                    h-16

                    flex
                    items-center
                    justify-center

                    rounded-2xl

                    bg-gradient-to-br
                    from-violet-600
                    via-fuchsia-600
                    to-purple-700

                    text-white

                    border
                    border-white/10

                    shadow-2xl
                    shadow-violet-500/30

                    transition-all
                    duration-300

                    hover:shadow-violet-500/60

                    active:scale-95
                "
            >
                <FaRobot size={28} />
            </motion.button>

        </div>
    );
}

export default FloatingButton;