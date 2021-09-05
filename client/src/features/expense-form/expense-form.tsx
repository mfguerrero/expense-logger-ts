import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { TextField, Button, InputAdornment } from "@material-ui/core";
import MoneyIcon from "@material-ui/icons/AttachMoney";

import SaveIcon from "@material-ui/icons/Save";
import BackIcon from "@material-ui/icons/ArrowBack";
import RemoveIcon from "@material-ui/icons/DeleteOutline";
import { useStyles } from "./expense-form.style";
import { IExpense } from "../../types/inferfaces";

const ExpenseForm: React.FC<{ expense: IExpense }> = ({ expense: { id } }) => {
  const classes = useStyles();
  const history = useHistory();

  const backHandler = () => {
    history.push("/dashboard");
  };

  const saveHandler = () => {
    toast.warning("Capture all fields!");
  };

  return (
    <form className={classes.form}>
      <TextField placeholder="Description" autoFocus className={classes.textField} variant="outlined" />
      <TextField
        type="text"
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
      />
      <TextField
        id="date"
        variant="outlined"
        type="date"
        defaultValue="2021-09-01"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        multiline
        rows={4}
        placeholder="Add a note for your expense (optional)"
        className={classes.textArea}
        variant="outlined"
      />
      <div className={classes.formActions}>
        <Button startIcon={<BackIcon />} onClick={backHandler}>
          Go Back
        </Button>
        <div>
          {id && (
            <Button variant="contained" disableElevation startIcon={<RemoveIcon />} style={{ marginRight: "1rem" }}>
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
