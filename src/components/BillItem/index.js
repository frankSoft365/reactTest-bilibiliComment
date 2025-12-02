import dayjs from "dayjs";
import './index.css';

export default function BillItem({ type, money, date, useFor }) {
    return (
        <div className="bill-item">
            <div className="type-useFor-money">
                <div className="type">{type === 'pay' ? '支出' : '收入'}</div>
                <div className="useFor">{useFor}</div>
                <div className="money">{type === 'pay' ? -money : money}</div>
            </div>
            <div className="date">
                <p>{dayjs(date).format('YYYY-MM-DD HH:mm')}</p>
            </div>
        </div>
    );
}