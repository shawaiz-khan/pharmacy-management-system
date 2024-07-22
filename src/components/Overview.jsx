/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { salesData } from "../assets/data/salesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown, faArrowTrendUp, faCircleCheck, faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { stockAlerts } from "../assets/data/stockData";
import { transactionData } from "../assets/data/transactionData";

function Overview() {
    const totalTransaction = () => {
        const total = transactionData.reduce((acc, transaction) => acc + (transaction.quantity * transaction.price), 0);
        return total.toLocaleString();
    };

    const totalPatientCount = () => {
        const uniquePatients = new Set(transactionData.map(transaction => transaction.patientName));
        return uniquePatients.size;
    };

    return (
        <main>
            <div className="flex flex-row gap-5 flex-wrap">
                {salesData.map((sale, id) => (
                    <div key={id} className="bg-white rounded-lg shadow-lg mt-10 w-[50%] hover:scale-110 transition-transform duration-300 ease-in flex-1">
                        <div className="text-[27px] text-white bg-green-600 font-bold px-6 py-4 rounded-t-lg">
                            {sale.sales}
                            <FontAwesomeIcon icon={faArrowTrendUp} className="ml-2" />
                        </div>
                        <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                            <h1 className="text-green-900 text-2xl font-bold">Increase: </h1>
                            <p className="text-green-500 font-bold text-2xl">{sale.increase}</p>
                        </div>
                        <div className="px-5 py-6">
                            <p>{sale.description}</p>
                        </div>
                    </div>
                ))}
                {stockAlerts.map((stock, id) => (
                    <div key={id} className="bg-white rounded-lg shadow-lg mt-10 w-[50%] hover:scale-110 transition-transform duration-300 ease-in flex-1">
                        <div className="text-[27px] text-white bg-red-700 font-bold px-6 py-4 rounded-t-lg">
                            {stock.stock}
                            <FontAwesomeIcon icon={faArrowTrendDown} className="ml-2" />
                        </div>
                        <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                            <h1 className="text-red-900 text-2xl font-bold">Remaining Stock: </h1>
                            <p className="text-red-500 font-bold text-2xl">{stock.units}</p>
                        </div>
                        <div className="px-5 py-6">
                            <p>{stock.description}</p>
                        </div>
                    </div>
                ))}
                <div className="bg-white rounded-lg shadow-md mt-10 w-[50%] hover:scale-110 transition-transform duration-300 ease-in flex-1">
                    <div className="text-[27px] text-white bg-green-600 font-bold px-6 py-4 rounded-t-lg">
                        Trends
                        <FontAwesomeIcon icon={faCircleCheck} className="ml-2" />
                    </div>
                    <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                        <h1 className="text-green-900 text-2xl font-bold">Medication: </h1>
                        <p className="text-green-500 font-bold text-2xl">Preventive</p>
                    </div>
                    <div className="px-5 py-6">
                        <p>Recent data shows an increase in preventive medication usage. We're adapting by expanding our offerings to match the growing demand.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-5 flex-wrap">
                <div className="bg-white rounded-lg shadow-lg mt-10 w-[50%] hover:scale-110 transition-transform duration-300 ease-in flex-1">
                    <div className="text-[27px] text-white bg-green-800 font-bold px-6 py-4 rounded-t-lg">
                        Total Transactions
                    </div>
                    <div className="text-lg px-5 pt-6 pb-6 flex w-fit h-fit gap-2">
                        <p className="text-green-900 text-2xl font-bold">$</p>
                        <p className="text-green-500 text-2xl font-bold">{totalTransaction()}</p>
                    </div>
                </div>
                <div className="bg-white rounded-lg shadow-lg mt-10 w-[50%] hover:scale-110 transition-transform duration-300 ease-in flex-1">
                    <div className="text-[27px] text-white bg-green-800 font-bold px-6 py-4 rounded-t-lg">
                        Total Patients
                    </div>
                    <div className="text-lg px-5 pt-6 pb-6 flex w-fit h-fit gap-2">
                        <p className="text-2xl font-bold"><FontAwesomeIcon icon={faPeopleGroup} className="text-green-900" /></p>
                        <p className="text-green-500 text-2xl font-bold">{totalPatientCount()}</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Overview;
