export function LandingTestimonials() {
  const testimonials = [
    {
      content:
        "This hospital management system has completely transformed our operations. We've seen a 40% reduction in administrative tasks and our staff can now focus more on patient care.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director",
      hospital: "City General Hospital",
    },
    {
      content:
        "The inventory management feature alone has saved us thousands of dollars by preventing overstocking and ensuring we never run out of critical supplies.",
      author: "Michael Chen",
      role: "Head of Procurement",
      hospital: "Memorial Medical Center",
    },
    {
      content:
        "Implementation was smooth and the support team was incredibly helpful. Our staff adapted quickly and patient satisfaction scores have improved significantly.",
      author: "Lisa Rodriguez",
      role: "Chief Nursing Officer",
      hospital: "Riverside Health",
    },
  ]

  return (
    <div id="testimonials" className="bg-white py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by healthcare professionals
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Hear what our customers have to say about our hospital management system.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="lg:col-span-1">
                <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden p-8 border border-gray-200">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="text-gray-600 mt-2">
                        <p className="text-lg italic">"{testimonial.content}"</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0">
                          <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                            {testimonial.author.charAt(0)}
                          </div>
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                          <p className="text-sm text-gray-500">
                            {testimonial.role}, {testimonial.hospital}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
