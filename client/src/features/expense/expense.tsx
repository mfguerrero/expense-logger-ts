import React from "react";
import numeral from "numeral";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";
import { useStyles } from "./expense.style";

interface ExpenseProps {
  id: number;
  description: string;
  amount: number;
  date: string;
}

const Expense: React.FC<ExpenseProps> = ({ id, description, amount, date }) => {
  const classes = useStyles();
  return (
    <Link className={classes.item} to={`/edit/${id}`}>
      <div>
        <h3 className={classes.title}>{description}</h3>
        <span className={classes.subTitle}>{DateTime.fromISO(date).toFormat("DD")}</span>
      </div>
      <h3 className={classes.data}>{numeral(amount / 100).format("$0,0.00")}</h3>
    </Link>
  );
};

export default Expense;
