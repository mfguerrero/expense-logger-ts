import React from "react";
import { Button } from "@material-ui/core";
import numeral from "numeral";
import Container from "../../components/layout/container";
import { useStyles } from "./summary.style";
import { setCurrentExpense } from "../../redux/expenses/reducer";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { summary } from "../../redux/expenses/selectors";
import { DateTime } from "luxon";

const Summary = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { count, total } = useAppSelector(summary);

  const formattedTotal = numeral(total / 100).format("$0,0.00");

  const addExpenseClickHandler = () => {
    dispatch(
      setCurrentExpense({
        executing: false,
        expense: {
          description: "",
          amount: 0,
          date: DateTime.now().toISODate(),
          comments: "",
        },
      })
    );
    window.nav.push("/manage");
  };

  return (
    <div className={classes.summary}>
      <Container>
        <h1>
          Viewing <span>{count}</span> {count === 1 ? "expense" : "expenses"} totaling <span>{formattedTotal}</span>
        </h1>
        <div className={classes.actions}>
          <Button variant="contained" color="primary" disableElevation onClick={addExpenseClickHandler}>
            Add Expense
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Summary;
