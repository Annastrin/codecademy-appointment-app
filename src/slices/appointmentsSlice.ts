import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Appointment } from '../types'

export const appointmentSlice = createSlice({
  name: 'appointment',
  initialState: [] as Appointment[],
  reducers: {
    addAppointment: (state, action: PayloadAction<Appointment>) => {
      state.push(action.payload)
    },
    deleteAppointment: (state, action: PayloadAction<Appointment>) => {
      return state.filter(appointment => appointment.id !== action.payload.id)
    },
  },
})

export const { addAppointment, deleteAppointment } = appointmentSlice.actions

export default appointmentSlice.reducer