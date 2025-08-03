interface TestimonialCardProps {
  name: string
  role: string
  quote: string
}

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center max-w-sm p-6 text-center bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{quote}</h3>
      <p className="mt-4 text-sm italic text-gray-700">{name}, {role}</p>
    </div>
  )
}
