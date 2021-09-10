import React, { useState, useEffect } from "react";
import { DateTime } from "luxon";
import { toast } from "react-toastify";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import MoneyIcon from "@material-ui/icons/AttachMoney";

import SaveIcon from "@material-ui/icons/Save";
import BackIcon from "@material-ui/icons/ArrowBack";
import RemoveIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "./expense-form.style";

import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { currentExpense } from "../../redux/expenses/selectors";
import { setCurrentExpense, saveExpense, deleteExpense } from "../../redux/expenses/reducer";

import { IExpense } from "../../types/inferfaces";

const ExpenseForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { expense } = useAppSelector(currentExpense);

  const [tempExpense, setTempExpense] = useState<Partial<IExpense>>({ ...expense });

  useEffect(() => {
    setTempExpense({ ...expense });
  }, [expense]);

  const backHandler = () => {
    dispatch(setCurrentExpense({ executing: false, expense: {} }));
    setTimeout(() => window.nav.push("/dashboard"), 0);
  };

  const isFormValid = () => {
    const { description, date, amount } = tempExpense;
    return description && description.trim() !== "" && date && date.trim() !== "" && amount && amount > 0;
  };

  const saveHandler = () => {
    if (!isFormValid()) return toast.warning("Capture all fields!");
    dispatch(saveExpense(tempExpense));
  };

  const removeHandler = () => {
    dispatch(deleteExpense(tempExpense.id!));
  };

  const changeDescHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const update = { ...tempExpense };
    update.description = event.target.value;
    setTempExpense(update);
  };

  const changeAmountHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const update = { ...tempExpense };
    update.amount = parseInt(event.target.value, 10) * 100;
    setTempExpense(update);
  };

  const changeDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const update = { ...tempExpense };
    update.date = DateTime.fromISO(event.target.value).toISODate();
    setTempExpense(update);
  };

  const changeCommentHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const update = { ...tempExpense };
    update.comments = event.target.value;
    setTempExpense(update);
  };

  return (
    <form className={classes.form}>
      <TextField
        name="description"
        placeholder="Description"
        autoFocus
        className={classes.textField}
        variant="outlined"
        value={tempExpense.description}
        onChange={changeDescHandler}
      />
      <TextField
        name="amount"
        type="number"
        placeholder="Amount"
        className={classes.textField}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <MoneyIcon />
            </InputAdornment>
          ),
        }}
        value={(tempExpense.amount && tempExpense.amount / 100) || 0}
        onChange={changeAmountHandler}
      />
      <TextField
        name="date"
        variant="outlined"
        type="date"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        value={tempExpense.date}
        onChange={changeDateHandler}
      />
      <TextField
        name="comments"
        multiline
        rows={4}
        placeholder="Add a note for your expense (optional)"
        className={classes.textArea}
        variant="outlined"
        value={tempExpense.comments}
        onChange={changeCommentHandler}
      />
      <div className={classes.formActions}>
        <Button startIcon={<BackIcon />} onClick={backHandler}>
          Go Back
        </Button>
        <div>
          {tempExpense.id && (
            <Button
              variant="contained"
              disableElevation
              startIcon={<RemoveIcon />}
              style={{ marginRight: "1rem" }}
              onClick={removeHandler}
            >
              Remove
            </Button>
          )}
          <Button variant="contained" color="primary" disableElevation startIcon={<SaveIcon />} onClick={saveHandler}>
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
