/* eslint-disable react/prop-types */
export default function Transactions({ transactionData }) {
    return (
        <main>
            <div>
                {transactionData.map(transaction => {
                    return (
                        <div key={transaction.id} className="transactions bg-transparent text-center justify-center w-60 px-5 py-3 ml-5 h-60 content-center border-2 border-blue-500 rounded-lg hover:bg-blue-400 hover:text-white transition-all 0.3s ease-in m-4">
                            <h2>{transaction.date}</h2>
                            <p>{transaction.item}</p>
                        </div>
                    );
                })}
            </div>
        </main>
    )
}