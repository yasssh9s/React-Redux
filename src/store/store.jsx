import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducer/userReducer'
import ProductReducer from './reducer/productReducer'
export const store = configureStore({
  reducer: {
    UserReducer : userReducer,
    ProductReducer : ProductReducer,
  },
})