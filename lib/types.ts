export interface Patient {
  id: string
  name: string
  age: number
  gender: string
  bloodType: string
  condition: string
  lastVisit: string
  contactNumber: string
  email: string
  address: string
}

export interface Appointment {
  id: string
  patientId: string
  patientName: string
  doctorId: string
  doctorName: string
  date: string
  time: string
  status: "scheduled" | "completed" | "cancelled"
  type: string
  notes: string
}

export interface Stock {
  id: string
  name: string
  quantity: number
  price: number
  status: "in-stock" | "low-stock" | "out-of-stock"
  category: string
  supplier: string
  lastUpdated: string
}
