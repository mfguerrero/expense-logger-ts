import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useStyles } from "./expenses.style";
import Container from "../../components/layout/container";
import Expense from "../expense/expense";
import Spinner from "../../components/spinner/spinner";
import { visibleExpenses } from "../../redux/expenses/selectors";
import { loadExpenses } from "../../redux/expenses/reducer";

const Expenses: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { loading, expenses } = useAppSelector(visibleExpenses);

  useEffect(() => {
    dispatch(loadExpenses());
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Container>
        <div className={classes.list}>
          <div className={classes.header}>
            <div>Expense</div>
            <div>Amount</div>
          </div>
          <div className={classes.body}>
            {loading && <Spinner />}
            {!loading &&
              (expenses.length === 0 ? (
                <div className={classes.noitems}>
                  <span>No Expenses</span>
                </div>
              ) : (
                expenses.map((expense) => {
                  return <Expense key={expense.id} {...expense} />;
                })
              ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Expenses;
