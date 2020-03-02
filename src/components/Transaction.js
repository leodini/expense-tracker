import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function Transaction(props) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = props.transaction.amount < 0 ? "-" : "+";
  return (
    <li className={props.transaction.amount > 0 ? "plus" : "minus"}>
      {props.transaction.text}{" "}
      <span>
        {sign}${Math.abs(props.transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(props.transaction.id)}
      >
        x
      </button>
    </li>
  );
}
