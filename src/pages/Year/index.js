import { useSelector } from "react-redux";
import BillItem from "@/components/BillItem";
import { useState } from "react";
import dayjs from "dayjs";
import { DatePicker } from "antd-mobile";
import classNames from "classnames";

export default function Year() {
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState({ year: dayjs().get('year') });
    const { billList } = useSelector(state => state.billList);
    const nextBillList = billList.filter(item => {
        const year = dayjs(item.date).get('year');
        return (year === date.year);
    });
    let pay = 0;
    let income = 0;
    nextBillList.forEach(item => {
        console.log('时间：' + item.date + ' 金额：' + item.money);
        if (item.type === 'pay') {
            pay += item.money;
        }
        if (item.type === 'income') {
            income += item.money;
        }
    });
    return (
        <div className='content'>
            <div>年度收支</div>
            <div className="dashboard">
                <div className="date" onClick={() => {
                    setVisible(true);
                }}>
                    <span className="text">{date.year}年账单</span>
                    <DatePicker
                        className='date-picker'
                        title='时间选择'
                        visible={visible}
                        onClose={() => setVisible(false)}
                        max={new Date()}
                        precision='year'
                        onConfirm={val => {
                            console.log(val.getFullYear());
                            setDate({
                                year: val.getFullYear()
                            });
                        }}
                    />
                    <span className={classNames('arrow', visible ? 'expand' : 'collapse')}></span>
                </div>
                <div className="pay-income-content">
                    <div className="item">
                        <span className="type">支出</span>
                        <span className="money">{(-pay).toFixed(2)}</span>
                    </div>
                    <div className="item">
                        <span className="type">收入</span>
                        <span className="money">{income.toFixed(2)}</span>
                    </div>
                    <div className="item">
                        <span className="type">结余</span>
                        <span className="money">{(pay + income).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className="bill-list">
                {nextBillList.map((item) => {
                    return (
                        <BillItem
                            key={item.id}
                            {...item}
                        />
                    );
                })}
            </div>
        </div>
    );
}