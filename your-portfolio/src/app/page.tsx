import Hero from "./components/hero/hero";
import Skills_Section from "./components/home/skills/skills";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-[1440px] mx-auto flex flex-col font-sans lg:pl-[120px] lg:pr-[120px]">
        <Hero/>
        <Skills_Section/>
      </main>
    </div>
  );
};
