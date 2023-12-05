import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'

// Actions and Reducers

const generalStateSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setExampleStateItem(state, action: PayloadAction<string>) {
      state.exampleStateItem = action.payload
    },
    reset() {
      return {
        ...initialState
      }
    }
  }
})

export default generalStateSlice