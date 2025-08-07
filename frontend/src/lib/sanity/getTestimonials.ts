import { client } from "./client"

export type Testimonial = {
  _id: string
  name: string
  role: string
  quote: string
}

export async function getTestimonials(): Promise<Testimonial[]> {
  return await client.fetch(`*[_type == "testimonial" && visible == true] | order(order asc) {
    _id,
    name,
    role,
    quote
  }`)
}
