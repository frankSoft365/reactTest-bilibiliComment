import channelReducer from './modules/channelStore';
import countReducer from './modules/counterStore';
import { configureStore } from '@reduxjs/toolkit';
const store = configureStore({
    reducer: {
        counter: countReducer,
        channel: channelReducer
    }
});
export default store;