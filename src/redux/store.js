import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './calculation'
import historyReducer from './payementHistory'

export const store = configureStore({
    reducer: {
        calculator: calculatorReducer,
        history: historyReducer
    },
})