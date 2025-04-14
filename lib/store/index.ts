import { configureStore } from "@reduxjs/toolkit"
import { doctorsReducer } from "./slices/doctors-slice"
import { authReducer } from "./slices/auth-slice"
import { appointmentsReducer } from "./slices/appointments-slice"

export const store = configureStore({
  reducer: {
    doctors: doctorsReducer,
    auth: authReducer,
    appointments: appointmentsReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
