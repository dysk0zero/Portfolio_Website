// app/font-test/page.tsx
import TestimonialsSection from "../components/home/testimonials";
import TestimonialCard from "../components/home/testimonials/cards";

export default function FontTest() {
  return (
    <section>
    <div className="h-auto mx-auto border border-white">
      <TestimonialCard
        name="John Doe"
        role="CTO"
        quote="El puto amo. 100% recomendado."
      />
    </div>
    <TestimonialsSection/>
    </section>

  );
}
