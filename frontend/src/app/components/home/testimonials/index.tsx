'use client'

import { useEffect, useState } from "react";
import Carousel from "../../ui/carousel";
import { getTestimonials } from "@/lib/sanity/getTestimonials";
import TestimonialCard from "./cards";
import { Testimonial } from "@/lib/sanity/getTestimonials";

export default function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  useEffect(() => {
    getTestimonials().then(setTestimonials)
  }, [])

  if (!testimonials.length) return null

  return (
    <section className="w-full py-16">
      <Carousel visibleCount={2}>
        {testimonials.map((t) => (
          <div key={t._id} className="min-w-[50%] px-4">
            <TestimonialCard name={t.name} role={t.role} quote={t.quote} />
          </div>
        ))}
      </Carousel>
    </section>
  )
}
