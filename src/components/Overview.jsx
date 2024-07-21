/* eslint-disable react/prop-types */
import { salesData } from "../assets/data/salesData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTrendDown, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { stockAlerts } from "../assets/data/stockData";

function Overview() {
    return (
        <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4 text-green-900">Overview</h2>
                <p className="text-gray-700">Welcome to the dashboard overview.</p>
            </div>
            <div className="flex flex-row gap-5 flex-wrap">
                {salesData.map((sale, id) => {
                    return (
                        <div key={id} className="bg-white rounded-lg shadow-lg mt-10 w-[50%] hover:scale-110 transition-all 0.3s ease-in flex-1">
                            <div className="text-[27px] text-white bg-green-700 font-bold px-6 py-4 rounded-t-lg">{sale.sales}<FontAwesomeIcon icon={faArrowTrendUp} className="ml-2" /></div>
                            <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                                <h1 className="text-green-900 text-2xl font-bold">Increase: </h1>
                                <p className="text-green-500 font-bold text-2xl">{sale.increase}</p>
                            </div>
                            <div className="px-5 py-6">
                                <p>{sale.description}</p>
                            </div>
                        </div>
                    )
                })}
                {stockAlerts.map((stock, id) => {
                    return (
                        <div key={id} className="bg-white rounded-lg shadow-lg mt-10 w-[50%] hover:scale-110 transition-all 0.3s ease-in flex-1">
                            <div className="text-[27px] text-white bg-red-700 font-bold px-6 py-4 rounded-t-lg">
                                {stock.stock}<FontAwesomeIcon icon={faArrowTrendDown} className="ml-2" />
                            </div>
                            <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                                <h1 className="text-red-900 text-2xl font-bold">Remaining Stock: </h1>
                                <p className="text-red-500 font-bold text-2xl">{stock.units}</p>
                            </div>
                            <div className="px-5 py-6">
                                <p>{stock.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-row flex-wrap gap-5">
                {stockAlerts.map((stock, id) => {
                    return (
                        <div key={id} className="bg-white rounded-lg shadow-lg mt-10 w-full hover:scale-110 transition-all 0.3s ease-in flex-1">
                            <div className="text-[27px] text-white bg-red-700 font-bold px-6 py-4 rounded-t-lg">
                                {stock.stock}<FontAwesomeIcon icon={faArrowTrendDown} className="ml-2" />
                            </div>
                            <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                                <h1 className="text-red-900 text-2xl font-bold">Remaining Stock: </h1>
                                <p className="text-red-500 font-bold text-2xl">{stock.units}</p>
                            </div>
                            <div className="px-5 py-6">
                                <p>{stock.description}</p>
                            </div>
                        </div>
                    )
                })}
                {stockAlerts.map((stock, id) => {
                    return (
                        <div key={id} className="bg-white rounded-lg shadow-lg mt-10 w-full hover:scale-110 transition-all 0.3s ease-in flex-1">
                            <div className="text-[27px] text-white bg-red-700 font-bold px-6 py-4 rounded-t-lg">
                                {stock.stock}<FontAwesomeIcon icon={faArrowTrendDown} className="ml-2" />
                            </div>
                            <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                                <h1 className="text-red-900 text-2xl font-bold">Remaining Stock: </h1>
                                <p className="text-red-500 font-bold text-2xl">{stock.units}</p>
                            </div>
                            <div className="px-5 py-6">
                                <p>{stock.description}</p>
                            </div>
                        </div>
                    )
                })}
                {stockAlerts.map((stock, id) => {
                    return (
                        <div key={id} className="bg-white rounded-lg shadow-lg mt-10 w-full hover:scale-110 transition-all 0.3s ease-in flex-1">
                            <div className="text-[27px] text-white bg-red-700 font-bold px-6 py-4 rounded-t-lg">
                                {stock.stock}<FontAwesomeIcon icon={faArrowTrendDown} className="ml-2" />
                            </div>
                            <div className="text-lg px-5 pt-6 flex w-fit h-fit gap-2">
                                <h1 className="text-red-900 text-2xl font-bold">Remaining Stock: </h1>
                                <p className="text-red-500 font-bold text-2xl">{stock.units}</p>
                            </div>
                            <div className="px-5 py-6">
                                <p>{stock.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Overview;