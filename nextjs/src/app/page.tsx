import Hero from "./components/hero";
import Skills_Section from "./components/home/skills";
import Statement01 from "./components/home/statement01";
import Statement02 from "./components/statement02";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-[1440px] mx-auto flex flex-col font-sans lg:pl-[120px] lg:pr-[120px]">
        <Hero/>
        <Skills_Section/>
        <Statement01/>
        <Statement02/>
      </main>
    </div>
  );
};
