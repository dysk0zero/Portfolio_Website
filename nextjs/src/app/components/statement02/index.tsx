function Statement02() {
    return (
        <section className="relative bg-background">
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
            <div className="mt-[150px] h-[150px] max-w-[900px] mx-auto">
                <h3>People-First culture around technical solutions.</h3>
            </div>
        </section>
    );
}

export default Statement02;