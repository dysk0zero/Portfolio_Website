import Hero from "./components/hero";
import Skills_Section from "./components/home/skills";
import Statement01 from "./components/home/statement01";
import Statement02 from "./components/home/statement02";
import SoftSkills from "./components/home/soft-skills";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <main className="flex flex-col">
        
        {/* Hero */}
        <section className="relative w-full bg-background">
          <div className="max-w-[1440px] mx-auto lg:pl-[120px] lg:pr-[120px]">
            <Hero />
          </div>
        </section>

        {/* Skills */}
        <section className="relative w-full bg-background">
          <div className="max-w-[1440px] mx-auto lg:pl-[120px] lg:pr-[120px]">
            <Skills_Section />
          </div>
        </section>

        {/* Statement 01 */}
        <section className="relative w-full bg-background">
          <div className="max-w-[1440px] mx-auto lg:pl-[120px] lg:pr-[120px]">
            <Statement01 />
          </div>
        </section>

        {/* Statement 02 */}
        <section className="relative w-full" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="max-w-[1440px] mx-auto lg:pl-[120px] lg:pr-[120px]">
            <Statement02 />
          </div>
        </section>

        <section className="relative w-full" style={{ backgroundColor: "#f5f5f5" }}>
          <div className="max-w-[1440px] mx-auto lg:pl-[120px] lg:pr-[120px]">
            <SoftSkills />
          </div>
        </section>

      </main>
    </div>
  );
}
