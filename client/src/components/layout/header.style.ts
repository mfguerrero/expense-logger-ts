import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.custom.mainDark,
    },
    content: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      "& > *": {
        color: theme.palette.custom.contrast,
      },
      "& div > *": {
        color: theme.palette.custom.contrast,
      },
      "& a": {
        textDecoration: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& svg": {
          marginRight: theme.spacing(1),
        },
      },
    },
    name: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
  })
);
