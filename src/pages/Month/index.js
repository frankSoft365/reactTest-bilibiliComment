import './index.css'
import classNames from "classnames";
import { useMemo, useState } from "react";
import { DatePicker } from 'antd-mobile'
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';
import BillItem from '@/components/BillItem';
import _ from 'lodash';

export default function Month() {
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState({ year: dayjs().get('year'), month: dayjs().get('month') + 1 });
    const { billList } = useSelector(state => state.billList);
    const monthBillList = billList.filter(item => {
        const year = dayjs(item.date).get('year');
        const month = dayjs(item.date).get('month') + 1;
        return (year === date.year && month === date.month);
    });
    const monthResult = useMemo(() => {
        const pay = monthBillList.filter(item => item.type === 'pay').reduce((a, c) => a + c.money, 0);
        const income = monthBillList.filter(item => item.type === 'income').reduce((a, c) => a + c.money, 0);
        return {
            pay,
            income
        };
    }, [monthBillList]);
    const dayList = useMemo(() => {
        const dayList = _.groupBy(monthBillList, item => dayjs(item.date).format("YYYY-MM-DD"));
        const keys = Object.keys(dayList);
        return {
            dayList,
            keys
        };
    }, [monthBillList]);
    return (
        <div className='content'>
            <div>月度收支</div>
            <div className="dashboard">
                <div className="date" onClick={() => {
                    setVisible(true);
                }}>
                    <span className="text">{date.year} | {date.month}月账单</span>
                    <DatePicker
                        className='date-picker'
                        title='时间选择'
                        visible={visible}
                        onClose={() => {
                            setVisible(false)
                        }}
                        max={new Date()}
                        precision='month'
                        onConfirm={val => {
                            console.log(val.getFullYear());
                            console.log(val.getMonth() + 1);
                            setDate({
                                year: val.getFullYear(),
                                month: val.getMonth() + 1
                            })
                        }}
                    />
                    <span className={classNames('arrow', visible ? 'expand' : 'collapse')}></span>
                </div>
                <div className="pay-income-content">
                    <div className="item">
                        <span className="type">支出</span>
                        <span className="money">{(-monthResult.pay).toFixed(2)}</span>
                    </div>
                    <div className="item">
                        <span className="type">收入</span>
                        <span className="money">{monthResult.income.toFixed(2)}</span>
                    </div>
                    <div className="item">
                        <span className="type">结余</span>
                        <span className="money">{(monthResult.pay + monthResult.income).toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <div className="bill-list">
                {dayList.keys.map((key) => {
                    return (
                        <BillItem
                            key={key}
                            date={key}
                            list={dayList.dayList[key]}
                        />
                    );
                })}
            </div>
        </div>
    );
}