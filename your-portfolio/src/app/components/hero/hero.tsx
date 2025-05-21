'use client'

const headingStyles = {
  "--from-color": "#ff0000",
  "--mid-color": "#3E4247",
  "--to-color": "#A5A5A5",
} as React.CSSProperties;

function Hero() {
  return (
    <section className="
        min-h-screen bg-background flex flex-col items-start">
      <div className="
          lg:pt-[140px] lg:pl-[150px] md:pl-8 sm:pl-6">
        <h4 className="
            h-[280px] w-[680px] bg-[linear-gradient(135deg,_var(--background),_var(--mid-color),_var(--to-color))] 
            content-center rounded-4xl pl-8 text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground leading-[1.65]
            shadow-[-4px_4px_4px_rgba(208,255,244,0.5)]
            text-shadow-[-4px_4px_4px_rgba(208,255,244,0.2)]"
          style={headingStyles}
        >
          Decoding challenges, <br /> Designing futures
        </h4>
        <h4 className="
            h-[200px] w-[680px] 
            content-center text-right rounded-4xl pl-8 text-2xl md:text-3xl lg:text-[32px] font-semibold text-foreground leading-[1.65]
            text-shadow-[4px_4px_4px_rgba(208,255,244,0.3)]"
          style={headingStyles}
        >
          Physics-trained designer & developer <br /> helping businesses move faster.
        </h4>
      </div>
    </section>
  );
}

export default Hero;
