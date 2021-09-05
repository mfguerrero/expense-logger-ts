/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button, IconButton } from "@material-ui/core";
import LightIcon from "@material-ui/icons/Brightness7";
import DarkIcon from "@material-ui/icons/Brightness4";
import ExitIcon from "@material-ui/icons/ExitToApp";
import Container from "./container";
import { useStyles } from "./header.style";
import ExpenseIcon from "@material-ui/icons/Payment";
import { DarkModeContext } from "../../theme/DarkModeContext";
import { signOut } from "../../redux/auth/reducer";

export const Header: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { prefersDarkMode, toggleTheme } = React.useContext(DarkModeContext);

  const logoutHandler = () => {
    dispatch(signOut());
  };

  return (
    <header className={classes.root}>
      <Container>
        <div className={classes.content}>
          <Link to="/dashboard">
            <ExpenseIcon fontSize="large" />
            <h1 className={classes.name}>Expense Logger</h1>
          </Link>
          <div>
            <IconButton onClick={() => toggleTheme()}>{prefersDarkMode ? <LightIcon /> : <DarkIcon />}</IconButton>
            <Button onClick={logoutHandler} startIcon={<ExitIcon />}>
              Logout
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
