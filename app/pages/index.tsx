// icons
import { FiChevronsDown } from "react-icons/fi";
function Button(props: { area: string }) {
    return (
        <button
            id="button"
            className={`grid-in-${props.area} transition-all
             bg-white/90 hover:bg-white shadow-md hover:shadow-xl`}
        >
            TEST
        </button>
    );
}

export default function Main() {
    return (
        <div className="h-screen w-screen flex items-center justify-center p-20">
            <div className="grid grid-areas-layout w-2/3 h-full gap-5">
                <Button area="game" />
                <Button area="game2" />
                <Button area="game3" />
                <Button area="prg" />
                <Button area="anm" />
            </div>
            <div className="fixed bottom-5 ltr:left-5 rtl:right-5  animate-pulse">
                <button className="animate-bounce bg-white rounded-full p-2 text-3xl hover:animate-none">
                    <FiChevronsDown className="" />
                </button>
            </div>
        </div>
    );
}
