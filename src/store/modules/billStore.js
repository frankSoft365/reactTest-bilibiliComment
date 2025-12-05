import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const billStore = createSlice({
    name: 'bill',
    initialState: {
        billList: []
    },
    reducers: {
        setBillList(state, action) {
            state.billList = action.payload;
        },
        addBillList(state, action) {
            state.billList.push(action.payload)
        }
    }
});

const { setBillList, addBillList } = billStore.actions;
const getBillList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/records');
        dispatch(setBillList(res.data));
    }
}
const addBill = (data) => {
    return async (dispatch) => {
        const res = await axios.post('http://localhost:3004/records', data);
        dispatch(addBillList(res.data))
    }
}
const reducer = billStore.reducer;

export default reducer;

export { getBillList, addBill };