import { createSlice, createAsyncThunk, type PayloadAction } from "@reduxjs/toolkit"
import type { Doctor } from "@/types/doctor"
import { doctorsData } from "@/data/doctors"

interface DoctorsState {
  doctors: Doctor[]
  featuredDoctors: Doctor[]
  loading: boolean
  error: string | null
}

const initialState: DoctorsState = {
  doctors: doctorsData,
  featuredDoctors: doctorsData.filter((doctor) => doctor.featured),
  loading: false,
  error: null,
}

export const fetchDoctors = createAsyncThunk("doctors/fetchDoctors", async (_, { rejectWithValue }) => {
  try {
    // In a real app, this would be an API call
    return doctorsData
  } catch (error) {
    return rejectWithValue("Failed to fetch doctors")
  }
})

const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    setFavoriteDoctor: (state, action: PayloadAction<string>) => {
      const doctorId = action.payload
      const doctor = state.doctors.find((d) => d.id === doctorId)
      if (doctor) {
        doctor.isFavorite = !doctor.isFavorite
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.doctors = action.payload
        state.featuredDoctors = action.payload.filter((doctor) => doctor.featured)
        state.loading = false
      })
      .addCase(fetchDoctors.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export const { setFavoriteDoctor } = doctorsSlice.actions
export const doctorsReducer = doctorsSlice.reducer
