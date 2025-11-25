import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const channelStore = createSlice({
    name: 'channel',
    initialState: {
        channelList: []
    },
    reducers: {
        setChannel(state, action) {
            state.channelList = action.payload;
        }
    }
});

const { setChannel } = channelStore.actions;
const reducer = channelStore.reducer;
const fetchChannelList = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:3004/comments');
        dispatch(setChannel(res.data));
    };
};

export { fetchChannelList };
export default reducer;