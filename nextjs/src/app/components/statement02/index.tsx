function Statement02() {
    return (
        <section className="relative border-b border-black/40" >
            <div className="absolute max-w-[1200px] px-8 inset-0 z-10 mx-auto pointer-events-none">
                {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute top-0 bottom-0 w-px bg-black opacity-40"
                    style={{
                    left: `${(i / 4) * 100}%`,
                    }}
                />
                ))}
            </div>
            <div className="pt-[100px] pb-[100px] h-[350px] max-w-[800px] mx-auto text-black">
                <h3 className="text-center text-[48px] font-bold">People-First culture around technical solutions.</h3>
            </div>
        </section>
    );
}

export default Statement02;