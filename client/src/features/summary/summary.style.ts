import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    summary: {
      background: theme.palette.custom.light,
      padding: theme.spacing(2, 0),
      "& h1": {
        margin: 0,
        fontWeight: "300",
        padding: theme.spacing(0, 0, 2, 0),
      },
      "& span": {
        fontWeight: "bold",
      },
    },
    actions: {},
  })
);
