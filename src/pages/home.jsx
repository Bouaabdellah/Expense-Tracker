import { History } from "../components/history";
import { AddTransaction } from "../components/addTransaction";
import { Header } from '../components/header';
import { Balance } from "../components/balance";
import { Calculate } from "../components/calculation";

export const Home = () => {
    //const apiKey = process.env.REACT_APP_API_KEY;
    return (
        <div className="w-1/2 mx-auto my-4 bg-gray-200 p-4 rounded-xl">
            <Header />
            <Balance />
            <Calculate />
            <History />
            <AddTransaction />
        </div>
    )
};