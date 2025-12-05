import classNames from 'classnames';
import './index.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBill } from '@/store/modules/billStore';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { Button, DatePicker } from 'antd-mobile';

export default function New() {
    const [type, setType] = useState('pay');
    const dispatch = useDispatch();
    const [useFor, setUseFor] = useState('drinks');
    const [money, setMoney] = useState(null);
    const navigate = useNavigate();
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(dayjs(new Date()).format('YYYY-MM-DDTHH:mm:ss'));
    return (
        <div className="new-panel">
            <div className="type-input">
                <div className="pay-income-select">
                    <span className={classNames('pay', type === 'pay' && 'selected')} onClick={() => setType('pay')}>pay</span>
                    <span className={classNames('income', type === 'income' && 'selected')} onClick={() => setType('income')}>income</span>
                </div>
                <div>
                    <Button
                        onClick={() => {
                            setVisible(true)
                        }}
                    >
                        {date}
                    </Button>
                    <DatePicker
                        visible={visible}
                        onClose={() => {
                            setVisible(false)
                        }}
                        precision='minute'
                        onConfirm={val => {
                            setDate(dayjs(val).format('YYYY-MM-DDTHH:mm:ss'))
                        }}
                    />
                </div>
                <input
                    className="input"
                    placeholder="¥0.00"
                    value={money}
                    onChange={(e) => setMoney(e.target.value)}
                    type='number'
                />
            </div>
            <div className="use-for">
                <ul className="use-for-list">
                    <li className={useFor === 'drinks' ? 'selected' : ''} onClick={() => setUseFor('drinks')}>drinks</li>
                    <li className={useFor === 'bonus' ? 'selected' : ''} onClick={() => setUseFor('bonus')}>bonus</li>
                    <li className={useFor === 'dessert' ? 'selected' : ''} onClick={() => setUseFor('dessert')}>dessert</li>
                    <li className={useFor === 'travel' ? 'selected' : ''} onClick={() => setUseFor('travel')}>travel</li>
                    <li className={useFor === 'salary' ? 'selected' : ''} onClick={() => setUseFor('salary')}>salary</li>
                    <li className={useFor === 'food' ? 'selected' : ''} onClick={() => setUseFor('food')}>food</li>
                </ul>
            </div>
            <button onClick={() => {
                const data = {
                    type: type,
                    // 不加+会出现money变为字符串的情况
                    money: type === 'pay' ? -money : +money,
                    date: date,
                    useFor: useFor,
                    id: uuidv4()
                }
                dispatch(addBill(data));
                navigate('/month');
            }}>commit</button>
        </div>
    );
}