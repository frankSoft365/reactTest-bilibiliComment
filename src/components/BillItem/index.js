import dayjs from "dayjs";
import './index.css';
import { useState, useMemo } from "react";
import classNames from "classnames";

export default function BillItem({ date, list }) {
    const [visible, setVisible] = useState(false);
    const dayResult = useMemo(() => {
        const pay = list.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0);
        const income = list.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0);
        return {
            pay,
            income
        };
    }, [list]);
    return (
        <div>
            <div className="dashboard">
                <div className="date">
                    <span className="text">{date}</span>
                    <span className={classNames('arrow', visible ? 'expand' : 'collapse')}
                        onClick={() => setVisible(!visible)}
                    ></span>
                </div>
                <div className="pay-income-content">
                    <div className="item">
                        <span className="type">支出</span>
                        <span className="money">{(-dayResult.pay).toFixed(2)}</span>
                    </div>
                    <div className="item">
                        <span className="type">收入</span>
                        <span className="money">{dayResult.income.toFixed(2)}</span>
                    </div>
                    <div className="item">
                        <span className="type">结余</span>
                        <span className="money">{(dayResult.pay + dayResult.income).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            {visible &&
                list.map(item => {
                    return (
                        <div className="bill-item" key={item.id}>
                            <div className="type-useFor-money">
                                <div className="type">{item.type === 'pay' ? '支出' : '收入'}</div>
                                <div className="useFor">{item.useFor}</div>
                                <div className="money">{item.type === 'pay' ? -item.money : item.money}</div>
                            </div>
                            <div className="date">
                                <p>{dayjs(item.date).format('YYYY-MM-DD HH:mm')}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
}