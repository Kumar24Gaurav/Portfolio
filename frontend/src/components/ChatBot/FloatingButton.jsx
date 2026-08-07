import { FaRobot } from "react-icons/fa";

function FloatingButton({ onClick }) {
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="absolute inset-0 rounded-2xl bg-violet-600 blur-xl opacity-40 animate-pulse"></div>

            <button
                onClick={onClick}
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

                hover:scale-110
                hover:rotate-6
                hover:shadow-violet-500/60

                active:scale-95
                "
            >
                <FaRobot size={28} />
            </button>
        </div>
    );
}

export default FloatingButton;