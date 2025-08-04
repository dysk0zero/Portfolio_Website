// app/font-test/page.tsx
export default function FontTest() {
  return (
    <section>
    <div className="min-h-screen p-10 font-sans text-3xl font-bold text-white">
      If this isn’t Montserrat Bold, we riot.
    </div>
    <div className="p-10 text-white bg-accent2">
      If this div isn’t red, Tailwind config is being ignored.
    </div>
    </section>

  );
}
