import { useDispatch, useSelector } from "react-redux";
import { decreament, increament, addToNum } from "../store/modules/counterStore";
import { useEffect } from "react";
import { fetchChannelList } from "../store/modules/channelStore";

function Counter() {
    const { count } = useSelector(state => state.counter);
    const { channelList } = useSelector(state => state.channel);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchChannelList());
    }, [dispatch]);
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <button onClick={() => dispatch(decreament())}>-</button>
                <div>{count}</div>
                <button onClick={() => dispatch(increament())}>+</button>
                <button onClick={() => dispatch(addToNum(10))}>add to 10</button>
                <button onClick={() => dispatch(addToNum(20))}>add to 20</button>
            </div>
            <div>
                {channelList.map(item => <li key={item.id}>{item.id} + {item.commentContent}</li>)}
            </div>
        </div>
    );
}

export default Counter;