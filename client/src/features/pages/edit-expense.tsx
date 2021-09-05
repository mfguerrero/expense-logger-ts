import { DateTime } from "luxon";
import React from "react";
import Container from "../../components/layout/container";
import Header from "../../components/layout/header";
import ExpenseForm from "../expense-form/expense-form";
import { useStyles } from "./edit-expense.style";

const EditExpense = () => {
  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.header}>
        <Container>
          <h1>Edit Expense</h1>
        </Container>
      </div>
      <Container>
        <ExpenseForm expense={{ id: 1, description: "", amount: 0, date: DateTime.now().toISO(), comments: "" }} />
      </Container>
    </div>
  );
};

export default EditExpense;
