/* eslint-disable react/prop-types */
import  { createContext, useState } from 'react';

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
    const [transactions, setTransactions] = useState([]);

    const addTransaction = (transaction) => {
        setTransactions([...transactions, transaction]);
    };

    return (
        <TransactionsContext.Provider value={{ transactions, addTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
};
