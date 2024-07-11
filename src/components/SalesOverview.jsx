/* eslint-disable react/prop-types */
export default function SalesOverview({ salesData }) {
    return (
        <main>
            <div className="bg-transparent text-center justify-center w-60 px-5 py-3 ml-5 h-60 content-center border-2 border-blue-500 rounded-lg hover:bg-blue-400 hover:text-white transition-all 0.3s ease-in">
                {salesData.map(sales => {
                    return (
                        <div key={sales.id} className="sales-overview">
                            <h2>{sales.sales}</h2>
                            <p>{sales.increase}</p>
                            <p>{sales.description}</p>
                        </div>
                    );
                })}
            </div>
        </main>
    )
}
