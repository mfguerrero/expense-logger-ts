import React from "react";
import Container from "../../components/layout/container";
import Header from "../../components/layout/header";
import { useAppSelector } from "../../redux/hooks";
import ExpenseForm from "../expense-form/expense-form";
import { useStyles } from "./manage-expense.style";
import { currentExpense } from "../../redux/expenses/selectors";

const AddExpense: React.FC = () => {
  const classes = useStyles();
  const { expense } = useAppSelector(currentExpense);
  return (
    <div>
      <Header />
      <div className={classes.header}>
        <Container>
          <h1>{expense.id ? "Update Expense" : "Create New Expense"}</h1>
        </Container>
      </div>
      <Container>
        <ExpenseForm />
      </Container>
    </div>
  );
};

export default AddExpense;
