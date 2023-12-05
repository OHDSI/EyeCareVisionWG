import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import initialState from './initialState'
import { appContent } from './types'

// Actions and Reducers

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    setAppContent: (_: appContent, action: PayloadAction<appContent>) => {
        return action.payload;
      },
    reset() {
      return {
        ...initialState
      }
    }
  },
});

export default contentSlice