/* eslint-disable react/prop-types */
export default function Transactions({ transactionData }) {
    return (
        <main>
            <h1 className="text-[30px] font-bold bg-green-500 w-full text-white px-3 py-2 justify-center content-center text-center rounded-lg mb-5 mt-5">Transactions</h1>
            <div className="flex w-full h-full flex-wrap justify-self-start content-center align-center m-5">
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