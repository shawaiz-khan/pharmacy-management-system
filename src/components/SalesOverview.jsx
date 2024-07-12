import { faForward } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function SalesOverview({ salesData }) {
    return (
        <main>
            <h1 className="text-[30px] font-bold bg-green-500 w-full text-white px-3 py-2 justify-center content-center text-center rounded-lg mb-5">Sales Overview</h1>
            <div className="bg-transparent text-center justify-center w-60 px-5 py-3 ml-5 h-60 content-center border-2 border-blue-500 rounded-lg hover:bg-blue-400 hover:text-white transition-all 0.3s ease-in">
                {salesData.map(sales => {
                    return (
                        <div key={sales.id} className="sales-overview">
                            <h2 className="text-[20px] font-bold">{sales.sales}</h2>
                            <p>{sales.increase}</p>
                            <p>{sales.description}</p>
                        </div>
                    );
                })}
            </div>
            <div className="w-full justify-end flex text-end">
                <h1 className="font-medium text-end justify-end bg-green-800 flex flex-col w-fit p-2 rounded-md text-white hover:bg-green-600 transition-all 0.3s ease-in"><Link to="/">Read More<FontAwesomeIcon icon={faForward} className="ml-2" /></Link></h1>
        </div>
        </main >
    )
}
