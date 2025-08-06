import { client } from "./client"

export async function getTestimonials() {
  return await client.fetch(`*[_type == "testimonial" && visible == true] | order(order asc) {
    name,
    role,
    quote
  }`)
}
