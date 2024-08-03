import { createSlice } from '@reduxjs/toolkit';

export const calculatorReducer = createSlice({
    name: "calculator",
    initialState: {
        incomeValue: 0,
        expenseValue: 0
    },
    reducers: {
        income: (state, action) => {
            state.incomeValue += +action.payload;
        },
        expense: (state, action) => {
            state.expenseValue += -1 * +action.payload;
        }
    }
});

export const { income, expense } = calculatorReducer.actions;

export default calculatorReducer.reducer;