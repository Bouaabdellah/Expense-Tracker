import { useSelector } from "react-redux";
import { remove } from "../redux/payementHistory.js";
import { useDispatch } from "react-redux";
import { income, expense } from "../redux/calculation.js"
import { useState } from "react";

// genarate key 
let key = 0;
export const History = () => {
    const historyBelongings = useSelector((state) => state.history.belongings);
    return (
        <div className=" my-3">
            <div className="text-2xl font-bold py-2 mb-3 border-b-[1px] border-b-gray-300 border-solid">History</div>
            <div className="max-h-[120px] overflow-y-auto flex flex-col gap-3">
                {historyBelongings.map((val, index) => {
                    return (
                        <HistoryCompenet item={val.item} amount={val.amount} index={index} key={key++} />
                    )
                })}
            </div>
        </div>
    )
};
// history component
const HistoryCompenet = ({ item, amount, index }) => {
    const dispatch = useDispatch();
    const removeBelongings = (value, index) => {
        if (value > 0)
            dispatch(income(-value));
        else
            dispatch(expense(-value));
        dispatch(remove(index));
    }
    const [display, setDisplay] = useState(false);
    const handleHover = () => {
        setDisplay(!display);
    }
    return (
        <div className={`bg-white min-h-[50px] items-center pl-2 pr-6 flex justify-between relative overflow-hidden
            after:absolute after:content-[""] after:top-0 after:right-0 after:w-3 after:h-full ${amount >= 0 ? 'after:bg-green-500' : 'after:bg-red-500'}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}>
            <span className="text-xl font-normal">{item}</span>
            <span className="text-xl font-normal">{amount >= 0 ? `$${amount}` : `-$${-amount}`}</span>
            <span className={`font-extrabold text-2xl cursor-pointer absolute top-0 text-white bg-red-600 h-full px-2 flex items-center duration-300
            ${display ? 'left-0' : '-left-10'}`}
                onClick={() => removeBelongings(amount, index)}>X</span>
        </div>
    );
}