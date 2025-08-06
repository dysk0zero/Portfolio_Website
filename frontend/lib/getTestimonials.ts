import { client } from "./sanity"

export async function getTestimonials() {
  return await client.fetch(`*[_type == "testimonial" && visible == true] | order(order asc) {
    name,
    role,
    quote
  }`)
}
