import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Contact } from '../types'

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [] as Contact[],
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.push(action.payload)
    },
    deleteContact: (state, action: PayloadAction<Contact>) => {
      return state.filter(contact => contact.id !== action.payload.id)
    },
  },
})

export const { addContact, deleteContact } = contactsSlice.actions

export default contactsSlice.reducer