export interface Testimonial {
  id: string
  name: string
  avatar: string
  role: string
  content: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Lisa Christophersen",
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Patient",
    content:
      "I've been using the Oladoc healthcare platform for a year now, and it's been a game-changer. The video consultations save me so much time!",
    rating: 5,
  },
  {
    id: "2",
    name: "Erling Haaland",
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Patient",
    content:
      "I was skeptical about telemedicine, but Oladoc has changed my view. The doctors are professional, and the platform is easy to use.",
    rating: 5,
  },
  {
    id: "3",
    name: "Amanda Magnusson",
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Patient",
    content:
      "As someone who travels frequently, it's helped me maintain consistent healthcare no matter where I am. The service is exceptional.",
    rating: 5,
  },
  {
    id: "4",
    name: "Alexandra Ruiz",
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Doctor",
    content:
      "As a healthcare provider, I can say that Oladoc has revolutionized how I connect with my patients. The platform is reliable and secure.",
    rating: 5,
  },
  {
    id: "5",
    name: "Daniel Longstreet",
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Patient",
    content:
      "The appointment scheduling system is so intuitive. I've never had issues booking or rescheduling my appointments. Highly recommend!",
    rating: 5,
  },
  {
    id: "6",
    name: "Mathias Brun",
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Patient",
    content:
      "The personalized health insights feature has been incredibly helpful. It's like having a personal health assistant!",
    rating: 5,
  },
  {
    id: "7",
    name: "Mary Cullen",
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Patient",
    content:
      "I appreciate how easy it is to access my medical records and share them with my healthcare providers. The secure file sharing feature is a lifesaver!",
    rating: 5,
  },
  {
    id: "8",
    name: "Simon Roy",
    avatar: "/placeholder.svg?height=60&width=60",
    role: "Healthcare Administrator",
    content:
      "From an administrative perspective, Oladoc streamlines so many processes. The billing integration has saved our practice countless hours.",
    rating: 5,
  },
]
