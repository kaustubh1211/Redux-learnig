import { configureStore, createReducer } from '@reduxjs/toolkit'
import counterReducer from './features/counterSlice'
import cartReducer from './features/cartSlic'
import userReducer from './features/userSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      cart:cartReducer,
      user: userReducer,
    },
  })
}