import TransactionForm from './TransactionForm';
import { TransactionsProvider, useTransactions } from './TransactionContext';

const TransactionFormPage = () => {
    const { addTransaction } = useTransactions();

    return (
        <div className="min-h-screen bg-gray-100 p-10">
            <TransactionForm addTransaction={addTransaction} />
        </div>
    );
};

export default function TransactionFormPageWrapper() {
    return (
        <TransactionsProvider>
            <TransactionFormPage />
        </TransactionsProvider>
    );
}