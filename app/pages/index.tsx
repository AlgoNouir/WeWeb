// icons
import { FiChevronsDown } from "react-icons/fi";

// my components
import Header from "@/components/headers";

export default function Main() {
    return (
        <div className="h-screen w-screen flex items-center justify-center p-20">
            <Header />
            <div className="grid grid-areas-layout w-2/3 h-full gap-5">
                <button
                    id="button"
                    className="grid-in-anm bg-white/80 hover:bg-white transition-all"
                >
                    TEST
                </button>
                <button
                    id="button"
                    className="grid-in-game bg-white/80 hover:bg-white transition-all"
                >
                    TEST
                </button>
                <button
                    id="button"
                    className="grid-in-game2 bg-white/80 hover:bg-white transition-all"
                >
                    TEST
                </button>
                <button
                    id="button"
                    className="grid-in-game3 bg-white/80 hover:bg-white transition-all"
                >
                    TEST
                </button>
                <button
                    id="button"
                    className="grid-in-prg bg-white/80 hover:bg-white transition-all"
                >
                    TEST
                </button>
            </div>
            <div className="fixed bottom-5 ltr:left-5 rtl:right-5  animate-pulse">
                <button className="animate-bounce bg-white rounded-full p-2 text-3xl hover:animate-none">
                    <FiChevronsDown className="" />
                </button>
            </div>
        </div>
    );
}
