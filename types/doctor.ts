export interface Doctor {
  id: string
  name: string
  specialty: string
  avatar: string
  rating: number
  reviews: number
  experience: number
  patients: number
  about: string
  education: string
  isFavorite: boolean
  featured: boolean
  availability: {
    days: string[]
    hours: string
  }
}
