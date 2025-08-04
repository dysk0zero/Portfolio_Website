function Statement03 () {
    return (
        <main className="relative pt-[150px] pb-[150px] border-b border-white/40">
            <div className="absolute max-w-[1200px] px-8 inset-0 z-10 mx-auto pointer-events-none">
                {Array.from({ length: 5 }).map((_, i) => (
                <div
                    key={i}
                    className="absolute top-0 bottom-0 w-px bg-white opacity-30"
                    style={{
                    left: `${(i / 4) * 100}%`,
                    }}
                />
                ))}
            </div>
            <h5 
                className="w-[920px] h-[150px] ml-[60px] lg:text-[48px] 
                z-20 font-bold 
                text-shadow-[-6px_-6px_6px_rgba(145,145,145,0.8)]"
            >
                From small freelance work to joining teams in enterprise projects.
            </h5>
        </main>
    );
}

export default Statement03;