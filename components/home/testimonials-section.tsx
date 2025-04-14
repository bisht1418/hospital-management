"use client"

import Image from "next/image"
import { testimonials } from "@/data/testimonials"

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <div className="mb-2 inline-flex items-center justify-center gap-1">
            <span className="h-2 w-2 rounded-full bg-purple-500"></span>
            <span className="h-2 w-2 rounded-full bg-indigo-500"></span>
            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
          </div>
          <h2 className="mt-4 text-3xl font-bold">
            In the words of those we've touched: discover stories of our happy patients
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.slice(0, 8).map((testimonial) => (
            <div key={testimonial.id} className="rounded-lg bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-medium">{testimonial.name}</h3>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">{testimonial.content}</p>
              <div className="flex">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-400"
                  >
                    <path d="M12 2L15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
