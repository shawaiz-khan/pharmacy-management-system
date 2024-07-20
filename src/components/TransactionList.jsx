import { useTransactions } from '../components/TransactionContext';

const TransactionList = () => {
    const { transactions } = useTransactions();

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <h1 className="text-2xl font-bold mb-4">Transaction List</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <table className="w-full table-auto">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 border">ID</th>
                            <th className="px-4 py-2 border">Medicine Name</th>
                            <th className="px-4 py-2 border">Quantity</th>
                            <th className="px-4 py-2 border">Price</th>
                            <th className="px-4 py-2 border">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction) => (
                            <tr key={transaction.id}>
                                <td className="px-4 py-2 border">{transaction.id}</td>
                                <td className="px-4 py-2 border">{transaction.medicineName}</td>
                                <td className="px-4 py-2 border">{transaction.quantity}</td>
                                <td className="px-4 py-2 border">${transaction.price.toFixed(2)}</td>
                                <td className="px-4 py-2 border">{transaction.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TransactionList;
