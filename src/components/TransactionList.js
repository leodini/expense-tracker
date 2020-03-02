import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.lenght > 0 ? (
          transactions.map(transaction => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <span className="transaction-span">nenhuma transacao</span>
        )}
      </ul>
    </>
  );
}
