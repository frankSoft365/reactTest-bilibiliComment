import { createSlice } from '@reduxjs/toolkit'

const counterStore = createSlice({
    name: 'counter',
    initialState: {
        count: 0
    },
    reducers: {
        increament(state) {
            state.count++;
        },
        decreament(state) {
            state.count--;
        },
        addToNum(state, action) {
            state.count = action.payload;
        }
    }
});

const { increament, decreament, addToNum } = counterStore.actions;
const reducer = counterStore.reducer;
export { increament, decreament, addToNum };
export default reducer;