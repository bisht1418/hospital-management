export interface Appointment {
  id: string
  doctorId: string
  patientId: string
  date: string
  time: string
  type: "video" | "in-person"
  status: "scheduled" | "completed" | "cancelled"
}
