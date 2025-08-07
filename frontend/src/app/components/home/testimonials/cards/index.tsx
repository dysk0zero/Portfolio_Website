interface TestimonialCardProps {
  name: string
  role: string
  quote: string
}

export default function TestimonialCard({ name, role, quote }: TestimonialCardProps) {
  return (
    <div 
      className="h-full flex flex-col justify-between p-8"
    >
      <div className="relative flex flex-col justify-start items-start gap-2 font-medium">
        <p className="text-3xl">&quot;{quote}&quot;</p>
        <p className="text-md">{name}, {role}</p>
      </div>
      <div className="relative flex justify-between items-center">
        <div className="flex items-center border border-white">
          <p className="p-4 text-xl font-semibold">Logo</p>
        </div>
        <div className="relative flex justify-center items-center pr-5">
          <p className="font-medium">Case Study</p>
        </div>
      </div>

    </div>
  )
}
