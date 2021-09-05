import React from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { DateTime } from "luxon";
import { TextField, Select, MenuItem, FormControl, InputLabel, IconButton } from "@material-ui/core";
import DownIcon from "@material-ui/icons/ArrowDownward";
import UpIcon from "@material-ui/icons/ArrowUpward";
import Container from "../../components/layout/container";
import { useStyles } from "./filters.style";

import { setMatch, setOrder, setStartDate, setEndDate, toggleAsc } from "../../redux/filters/reducer";

const Filters = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();

  const match = useAppSelector((state) => state.filters.match);
  const startDate = useAppSelector((state) => state.filters.startDate);
  const endDate = useAppSelector((state) => state.filters.endDate);
  const orderBy = useAppSelector((state) => state.filters.orderBy);
  const asc = useAppSelector((state) => state.filters.asc);

  const searchChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setMatch(event.target.value));
  };

  const startDateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value && value.trim()) dispatch(setStartDate(DateTime.fromISO(value)));
  };

  const endDateChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value && value.trim()) dispatch(setEndDate(DateTime.fromISO(value)));
  };

  const orderChangeHandler = (event: React.ChangeEvent<{ value: unknown }>) => {
    dispatch(setOrder(event.target.value as string));
  };

  const toggleHandler = () => {
    dispatch(toggleAsc());
  };

  return (
    <div>
      <Container>
        <div className={classes.group}>
          <div className={classes.groupItem}>
            <TextField
              placeholder="Search expenses"
              variant="outlined"
              className={classes.inputField}
              label="search"
              value={match}
              onChange={searchChangeHandler}
            />
          </div>
          <div className={classes.groupItem}>
            <FormControl variant="outlined">
              <InputLabel htmlFor="outlined-age-native-simple">order by</InputLabel>
              <Select
                variant="outlined"
                className={classes.select}
                label="order by"
                value={orderBy}
                onChange={orderChangeHandler}
              >
                <MenuItem value="date">Date</MenuItem>
                <MenuItem value="amount">Amount</MenuItem>
              </Select>
            </FormControl>
            <IconButton onClick={toggleHandler} className={classes.ascDesc}>
              {asc ? <DownIcon /> : <UpIcon />}
            </IconButton>
          </div>
          <div className={classes.groupItem}>
            <TextField
              id="start-date"
              variant="outlined"
              label="from"
              type="date"
              value={startDate.toISODate()}
              onChange={startDateChangeHandler}
              className={classes.inputField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
          <div className={classes.groupItem}>
            <TextField
              id="end-date"
              variant="outlined"
              label="to"
              type="date"
              value={endDate.toISODate()}
              onChange={endDateChangeHandler}
              className={classes.inputField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Filters;
