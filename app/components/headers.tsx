function HeaderElement(props: { title: string; ping?: boolean }) {
    return (
        <div className="w-full relative h-full flex">
            {props.ping && (
                <div className="bg-white absolute w-3 h-3 rounded-full">
                    <div className="bg-white absolute w-3 h-3 rounded-full animate-ping" />
                </div>
            )}
            <button
                className="text-md hover:border-white/90 border-white/70 w-full 
    hover:border-b-2 hover:pb-1 transition-all text-white/70 hover:text-white/90"
            >
                <p>{props.title}</p>
            </button>
        </div>
    );
}

export default function Header() {
    return (
        <div
            className="fixed top-5 w-full flex flex-row items-center justify-center
         space-x-5 rtl:space-x-reverse"
        >
            <div className="grid grid-cols-5 w-fit gap-7 place-items-center">
                <HeaderElement title="اطلاعیه ها" />
                <HeaderElement title="همکاری با ما" />
                <button className="text-2xl text-white ">صدر اشراق</button>
                <HeaderElement title="مسابقات ما" ping />
                <HeaderElement title="درباره ما" />
            </div>
        </div>
    );
}
