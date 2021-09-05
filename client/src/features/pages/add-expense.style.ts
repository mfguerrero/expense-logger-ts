import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      background: theme.palette.custom.light,
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3, 0),
      "& h1": {
        textAlign: "center",
        fontWeight: "300",
      },
    },
  })
);
