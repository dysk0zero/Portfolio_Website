import TestimonialCard from "./cards"

interface TestimonialsCarouselProps {
  testimonials: Array<{
    name: string
    role: string
    quote: string
  }>
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  return (
    <div className="flex gap-6 py-4 overflow-x-auto snap-x snap-mandatory">
      {testimonials.map((t, i) => (
        <div key={i} className="flex-shrink-0 snap-center">
          <TestimonialCard {...t} />
        </div>
      ))}
    </div>
  )
}
