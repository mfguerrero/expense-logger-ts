import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import numeral from "numeral";
import Container from "../../components/layout/container";
import { useStyles } from "./summary.style";

import { summary } from "../../redux/expenses/selectors";

const Summary = () => {
  const classes = useStyles();
  const history = useHistory();

  const { count, total } = useSelector(summary);

  const formattedTotal = numeral(total / 100).format("$0,0.00");

  const addExpenseClickHandler = () => {
    history.push("/create");
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
