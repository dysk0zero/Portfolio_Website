import SkillCard from "./card";

function Skills_Section() {
  return (
    <section className="relative flex flex-col bg-background">
      {/* Grid lines */}
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

      {/* Statement */}
      <div className="ml-auto lg:pr-[10px] z-50">
        <h3 
          className="h-[140px] w-[580px] bg-[rgba(255,255,255,0.12)] rounded-3xl 
          content-center text-right pr-[15px]
          text-2xl md:text-3xl lg:text-[32px] font-semibold text-foreground 
          text-shadow-skills
          backdrop-blur-[4px]"
        >
          I deliver custom solutions to solve <br /> critical business
          challenges.
        </h3>
      </div>

      {/* Cards in grid */}
      <div className="grid grid-cols-4 gap-0 w-full max-w-[1200px] mx-auto md:pt-[80px] z-50">
        {/* Empty first column */}
        <div>
          <h4 className="sr-only">Technical coding, analytical and designing skills.</h4>
        </div>

        {/* Three cards aligned with columns */}
        <SkillCard
          id="01"
          title="Data"
          description="A strong focus on measurable analytics, KPIs, and data analysis. I use real mathematical methods to bring qualitative insights."
          shadowColor="rgba(109,246,255,0.2)"
          bgColor="rgba(208,255,244,0.1)"
          gradientColors={["rgba(9,82,98,0.2)", "rgba(9,82,98,0.9)"]}
        />
        <SkillCard
          id="02"
          title="Code"
          description="Helping build web applications using Nextjs and headless solutions. I also work regularly with scientific tools in Python and C++."
          shadowColor="rgba(252,109,255,0.2)"
          bgColor="rgba(255,208,245,0.1)"
          gradientColors={["rgba(96,9,98,0.2)", "rgba(96,9,78,0.9)"]}
        />
        <SkillCard
          id="03"
          title="Design"
          description="A passion for simplicity. Inspired by natural and minimal lines, I use modern tools like Figma to work collaboratively within a team."
          shadowColor="rgba(235,255,109,0.2)"
          bgColor="rgba(255,248,208,0.1)"
          gradientColors={["rgba(96,98,9,0.2)", "rgba(85,98,9,0.9)"]}
        />
      </div>
    </section>
  );
}

export default Skills_Section;