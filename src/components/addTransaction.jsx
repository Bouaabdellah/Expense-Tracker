import { useState } from "react";
import { useDispatch } from "react-redux";
import { income, expense } from "../redux/calculation.js"
import { add } from "../redux/payementHistory.js";

export const AddTransaction = () => {
    const [text, setText] = useState(""),
        [amount, setAmount] = useState(0);
    const changeText = (event) => {
        setText(event.target.value);
    };
    const changeAmount = (event) => {
        setAmount(event.target.value);
    };
    // we gona use our actions thar are related with their reducers
    const dispatch = useDispatch();
    const adding = (event) => {
        event.preventDefault();
        // calculation part
        if (text !== "") {
            if (amount >= 0)
                dispatch(income(amount));
            else
                dispatch(expense(amount));
            // add the new item to the history
            dispatch(add({ item: text, amount: amount }));
            // clean the inputs
            document.querySelectorAll("form input:not([type=submit])").forEach((inp) => {
                inp.value = "";
            });
            // set the state to initial state
            setText("");
            setAmount(0);
        }
    }
    return (
        <div>
            <div className="text-2xl font-bold py-2 mb-2 border-b-[1px] border-b-gray-300 border-solid">
                Add New Transaction
            </div>
            <form action="" onSubmit={adding} className="flex flex-col">
                <label htmlFor="text" className="mb-2 text-xl font-semibold">Text</label>
                <input type="text" className="mb-3 rounded-md p-2 text-xl outline-none" id="text" onChange={changeText} placeholder="Enter Text.." />
                <label htmlFor="amount" className="mb-2 text-xl font-semibold">Amount</label>
                <input type="number" className="mb-3 rounded-md p-2 text-xl outline-none" id="amount" onChange={changeAmount} placeholder="0" />
                <input type="submit" value="Add Transaction" className="bg-violet-500 mt-4 text-white font-bold text-center py-3 text-xl cursor-pointer" />
            </form>
        </div>
    )
};