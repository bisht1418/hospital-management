import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { Appointment } from "@/types/appointment"

interface AppointmentsState {
  appointments: Appointment[]
  loading: boolean
  error: string | null
}

const initialState: AppointmentsState = {
  appointments: [],
  loading: false,
  error: null,
}

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.appointments.push(action.payload)
    },
    cancelAppointment: (state, action: PayloadAction<string>) => {
      state.appointments = state.appointments.filter((appointment) => appointment.id !== action.payload)
    },
    setAppointments: (state, action: PayloadAction<Appointment[]>) => {
      state.appointments = action.payload
    },
  },
})

export const { addAppointment, cancelAppointment, setAppointments } = appointmentsSlice.actions
export const appointmentsReducer = appointmentsSlice.reducer
