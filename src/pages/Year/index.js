import { useSelector } from "react-redux";
import BillItem from "@/components/BillItem";

export default function Year() {
    const { billList } = useSelector(state => state.billList);
    return (
        <div>

            <div className="bill-list">
                {billList.map((item) => {
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