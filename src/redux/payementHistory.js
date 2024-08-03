import { createSlice } from '@reduxjs/toolkit';

export const historyReducer = createSlice({
    name: "history",
    initialState: {
        belongings: []
    },
    reducers: {
        add: (state, action) => {
            state.belongings.push(action.payload)
        },
        remove: (state, action) => {
            for (let i = action.payload; i < state.belongings.length - 1; i++)
                state.belongings[i] = state.belongings[i + 1];
            state.belongings.length--;
        }
    }
});

export const { add, remove } = historyReducer.actions;

export default historyReducer.reducer;