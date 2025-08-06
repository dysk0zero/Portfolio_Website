// app/font-test/page.tsx
import TestimonialCard from "../components/home/testimonials/cards";

export default function FontTest() {
  return (
    <section>
    <div className="h-[400px] mx-auto border border-white">
      <TestimonialCard
        name="John Doe"
        role="CTO"
        quote="El puto amo. 100% recomendado."
      />
    </div>
    </section>

  );
}
