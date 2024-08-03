import { useSelector } from "react-redux"

export const Calculate = () => {
    const incomeValue = useSelector((state) => state.calculator.incomeValue),
        expenseValue = useSelector((state) => state.calculator.expenseValue);
    return (
        <div className="flex bg-white rounded-md">
            <div className="py-3 flex flex-col gap-2 basis-1/2 items-center text-green-500 border-r-2 border-r-gray-200 border-solid">
                <span className="font-semibold text-2xl">Income</span>
                <span className="font-bold text-2xl">${incomeValue}</span>
            </div>
            <div className="py-3 flex flex-col gap-2 basis-1/2 items-center text-red-500">
                <span className="font-semibold text-2xl">Expense</span>
                <span className="font-bold text-2xl">${expenseValue}</span>
            </div>
        </div>
    )
}