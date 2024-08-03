import { useSelector } from "react-redux";

export const Balance = () => {
    const balanceValue = useSelector((state) => {
        return state.calculator.incomeValue - state.calculator.expenseValue
    });
    return (
        <div className="my-4">
            <span className="font-semibold text-2xl mr-2">Your Balance is : </span>
            <span className="font-bold text-2xl">{balanceValue >= 0 ? `$${balanceValue}` : `-$${-balanceValue}`}</span>
        </div>
    )
}