import React from "react";
import { useStyles } from "./container.style";

const Container: React.FC = ({ children }) => {
  const classes = useStyles();
  return <div className={classes.container}>{children}</div>;
};

export default Container;
