import channelReducer from './modules/channelStore';
import countReducer from './modules/counterStore';
import billReducer from './modules/billStore';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: {
        counter: countReducer,
        channel: channelReducer,
        billList: billReducer
    }
});
export default store;