import { configureStore } from '@reduxjs/toolkit'
import {AllProductSliceReducer, CartSliceReducer, HeroSectionReducer,ProductReducer} from './Slice'

export const store = configureStore({
  reducer: {
    HeroSection: HeroSectionReducer,
    Product : ProductReducer,
    Cart:CartSliceReducer,
    AllProduct:AllProductSliceReducer,

  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch