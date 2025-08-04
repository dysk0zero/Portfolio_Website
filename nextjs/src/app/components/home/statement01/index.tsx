function Statement01() {
    return (
        <section className="relative bg-background pb-[100px]">
            <div className="absolute max-w-[1200px] px-8 inset-0 z-10 mx-auto pointer-events-none">
                {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute top-0 bottom-0 w-px bg-white opacity-40"
                    style={{
                    left: `${(i / 4) * 100}%`,
                    }}
                />
                ))}
            </div>
            <div className="relative ml-[60px] pt-[150px] w-[850px] h-[350px]">
                <h4 className="text-2xl md:text-3xl lg:text-[32px] font-bold text-foreground text-shadow-[-4px_4px_4px_rgba(208,255,244,0.4)] backdrop-blur-[4px] leading-[1.25]">
                    As technology improves, our need to digitalize traditional business and improve existing systems increases. 
                    <span className="block mt-4"/>Let&apos;s build that together.
                </h4>
            </div>
        </section>
    );
}

export default Statement01;