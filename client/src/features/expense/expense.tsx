import React from "react";
import numeral from "numeral";
import { DateTime } from "luxon";
import { useStyles } from "./expense.style";
import { useAppDispatch } from "../../redux/hooks";
import { setCurrentExpense } from "../../redux/expenses/reducer";

interface ExpenseProps {
  id: number;
  description: string;
  amount: number;
  date: string;
  comments: string;
}

const Expense: React.FC<ExpenseProps> = ({ id, description, amount, date, comments }) => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setCurrentExpense({ executing: false, expense: { id, description, amount, date, comments } }));
    setTimeout(() => window.nav.push("/manage"), 0);
  };

  return (
    <div className={classes.item} onClick={handleClick}>
      <div>
        <h3 className={classes.title}>{description}</h3>
        <span className={classes.subTitle}>{DateTime.fromISO(date).toFormat("DD")}</span>
      </div>
      <h3 className={classes.data}>{numeral(amount / 100).format("$0,0.00")}</h3>
    </div>
  );
};

export default Expense;
