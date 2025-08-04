const headingStyles = {
  "--from-color": "#ff0000",
  "--mid-color": "#3E4247",
  "--to-color": "#A5A5A5",
} as React.CSSProperties;

const lines = [
  { left: '0%', top: '70%' },
  { left: '25%', top: '85%' },
  { left: '50%', top: '90%' },
  { left: '75%', top: '15%' },
  { left: '100%', top: '0%' },
];

function Hero() {
  return (
    <section className="
        max-w-[1440px] relative min-h-screen bg-background flex flex-col items-start">

        <div className="absolute max-w-[1200px] px-8 inset-0 z-[1] mx-auto pointer-events-none">
            {lines.map((line, i) => (
              <div
                key={i}
                className="absolute w-px bg-white opacity-40"
                style={{
                  left: line.left,
                  top: line.top,
                  bottom: 0,
                }}
              />
            ))}
        </div>

      <div 
          className="lg:pt-[140px] lg:pl-[0px] md:pl-8 sm:pl-6 z-[10]">
        <h5 className="
            h-[280px] w-[680px] 
            bg-[linear-gradient(120deg,_var(--background)_30%,_var(--mid-color)_60%,_var(--to-color)_90%)] 
            rounded-4xl content-center  pl-8 
            text-4xl md:text-5xl lg:text-[56px] font-semibold text-foreground leading-[1.65]
            shadow-[-4px_4px_4px_rgba(208,255,244,0.5)]
            text-shadow-[-4px_4px_4px_rgba(0,134,100,0.8)]"
          style={headingStyles}
        >
          Decoding challenges, <br /> Designing futures
        </h5>
        <h2 className="
            h-[200px] w-[680px] 
            content-center text-right
            text-2xl md:text-3xl lg:text-[32px] font-semibold text-foreground 
            text-shadow-[6px_6px_6px_rgba(0,134,100,0.8)]"
          style={headingStyles}
        >
          Physics-trained designer & developer <br /> helping businesses move faster.
        </h2>
      </div>
    </section>
  );
}

export default Hero;
