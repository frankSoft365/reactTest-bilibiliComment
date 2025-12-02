import './index.css'
import classNames from "classnames";
import { useState } from "react";

export default function Month() {
    const [isExpand, setIsExpand] = useState(false);
    return (
        <div>
            <div>月度收支</div>
            <div className="dashboard">
                <div className="date" onClick={() => setIsExpand(!isExpand)}>
                    <span className="text">2024 | 2月账单</span>
                    <span className={classNames('arrow', isExpand ? 'expand' : 'collapse')}></span>
                </div>
                <div className="pay-income-content">
                    <div className="item">
                        <span className="type">支出</span>
                        <span className="money">0.00</span>
                    </div>
                    <div className="item">
                        <span className="type">收入</span>
                        <span className="money">0.00</span>
                    </div>
                    <div className="item">
                        <span className="type">结余</span>
                        <span className="money">0.00</span>
                    </div>
                </div>
            </div>
            <div className="bill-list">

            </div>
        </div>
    );
}