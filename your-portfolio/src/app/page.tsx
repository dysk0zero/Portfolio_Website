import Hero from "./components/hero/hero";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="max-w-[1440px] mx-auto flex flex-col gap-8 font-sans">
        <Hero/>
      </main>
    </div>
  );
};
