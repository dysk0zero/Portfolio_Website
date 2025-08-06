interface SkillCardProps {
  id: string;
  title: string;
  description: string;
  shadowColor: string;
  bgColor: string;
  gradientColors?: [string, string]; 
}

export default function SkillCard({
  id,
  title,
  description,
  shadowColor,
  bgColor,
  gradientColors = ["#00ff00", "#0000ff"],
}: SkillCardProps) {
  return (
    <div className="content-center border-t border-b border-white/30">
      {/* Number */}
      <div className="flex lg:w-[50px] lg:h-[50px] justify-center">
        <h3 className="content-center text-white lg:text-sm">{id}</h3>
      </div>

      {/* Card */}
      <div className="relative m-[10px] mr-[20px] mb-[20px]">
        <div
          className="absolute top-[10px] left-[10px] w-full h-[190px] rounded-2xl z-30"
          style={{ background: shadowColor }}
        />
        <div
          className="absolute top-[5px] left-[5px] w-full h-[190px] rounded-2xl z-30"
          style={{
            background: `linear-gradient(135deg, rgba(255,255,255,0), ${gradientColors[0]}, ${gradientColors[1]})`,
          }}
        />
        <div
          className="absolute top-[5px] left-[5px] w-full h-[190px] rounded-2xl z-30"
          style={{ background: `${bgColor}00` }}
        />
        <div
          className="absolute top-[5px] left-[5px] w-full h-[190px] rounded-2xl z-30"
          style={{ background: "rgba(0,0,0,0.2)"}}
        />
        <div
          className="relative w-full h-[190px] backdrop-blur-[8px] rounded-2xl z-50 p-[10px] pr-0"
          style={{ background: bgColor }}
        >
          <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold text-foreground">
            {title}
          </h3>
          <p className="pt-[10px] pr-[10px] text-sm lg:text-[18px] font-normal text-foreground leading-[1.15]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
