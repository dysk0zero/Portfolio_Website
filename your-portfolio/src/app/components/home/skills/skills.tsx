// This  component is in charge of the section "Skills" of the landing page.
// It contains first a grid background in z-[1] and then the section in z-[10]. 
// The section contains three parts:
// 1. A statement with a background blur.
// 2. Three cards with three gradient backgrounds.
// 3. A second statement.
// First the main function is defined, then the component is exported.
// The component is a functional component that returns a JSX element.
function Skills_Section() {
  return (
    // The section is a flex container with a background color. 
    <section className="relative  bg-background flex flex-col">

      {/* This is the first container that will contain the background grid. The maximum width is set to 1200px. We do this to always have a 
      120px gap on each side of the screen. his is specially important for screen sizes smaller than 1440px but bigger than 1200px. 
      Then we position it at the back at z-[1]. */}

      <div className="absolute max-w-[1200px] px-8 inset-0 z-[1] mx-auto">
        {/* Inside the container our grid is defined, with 5 vertical lines spaced by the same gap. */}

          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-white opacity-40"
              style={{
                left: `${(i / 4) * 100
                }%`,
              }}
            />
          ))}
      </div>
      
      {/* In this container we will place the first statement.
      Then we position it at the front at z-[10], and make it fill the container full size with ml-auto. */}
      <div className="ml-auto lg:pr-[10px] z-[10]">
        {/* This is the first statement. It has a background blur, and background color. */}
        <h3 className="
        h-[140px] w-[580px] bg-[rgba(255,255,255,0.12)] rounded-4xl
        content-center text-right pr-[10px]
        text-2xl md:text-3xl lg:text-[32px] font-semibold text-foreground
        text-shadow-[4px_4px_4px_rgba(255,208,245,0.5)]
        backdrop-blur-[4px]"
        >
        I deliver custom solutions to solve <br /> critical business challenges.
        </h3>
      </div>

      {/* In this container we will place the three cards with three gradient backgrounds.
      The container is a flex container with row direction.
      The cards are flex containers with column direction.
      We set the left padding to 25% to make the cards match the background grid.
      The container is positioned at the front at z-[10], and make it fill the container full size with ml-auto. */}
      <div
        className="
          flex flex-row
          pl-[25%]  ml-auto
          z-[10]
          md:pt-[80px]"    
      >
        {/* Each card is a flex container with column direction. */}
        <div className="
          border-t border-b border-white/40
          content-center
          text-2xl md:text-3xl lg:text-[32px]
          flex-col"
        >
          {/* This contains the small top left corner number of the card. */}
          <div className="flex lg:w-[50px] lg:h-[50px] justify-center">
            <h6 className="content-center lg:text-sm text-white">01</h6>
          </div>
          <div className="p-[10px] mb-[10px] bg-white">
            <h1 className="
              text-xl md:text-2xl lg:text-[28px] font-semibold text-foreground">
              Data
            </h1>
            <h6 className="text-sm lg:text-[18px] font-normal text-foreground leading-[1.15]">
              A strong focus on measurable analytics, KPIs, and data analysis. I use real mathematical methods to bring qualitative insights.
            </h6>
          </div>
          
          </div>

        <div className="
          border-t border-b border-white/40
          content-center
          text-2xl md:text-3xl lg:text-[32px] font-normal text-foreground
          flex-col"
        >
          <div className="flex lg:w-[50px] lg:h-[50px] justify-center">
            <h6 className="content-center lg:text-sm text-white">02</h6>
          </div>
          <div className="p-[10px] mb-[10px] bg-white">
            <h1 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-foreground">
            Code
          </h1>
          <h6 className="text-sm lg:text-[18px] text-foreground leading-[1.15]">
            Helping build web applications using Nextjs and headless solutions. I also work regularly with scientific tools in Python and C++.
          </h6>
          </div>
        </div>

        <div className="
          border-t border-b border-white/40
          content-center
          text-2xl md:text-3xl lg:text-[32px] font-normal text-foreground
          flex-col"
        >
          <div className="flex lg:w-[50px] lg:h-[50px] justify-center">
            <h6 className="content-center lg:text-sm text-white">03</h6>
          </div>
          <div className="p-[10px] mb-[10px] bg-white">
            <h1 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-foreground">
              Design
            </h1>
            <h6 className="text-sm lg:text-[18px] text-foreground leading-[1.15]">
              A passion for simplicity. Inspired by natural and minimal lines, I use modern tools like Figma to work collaboratively within a team.
            </h6>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Skills_Section;