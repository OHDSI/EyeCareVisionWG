import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'

// Actions and Reducers

const generalStateSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setfontSize(state, action: PayloadAction<string>) {
      state.fontSize = action.payload
    },
    reset() {
      return {
        ...initialState
      }
    }
  }
})

export default generalStateSlice