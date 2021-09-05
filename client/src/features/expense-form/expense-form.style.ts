import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    form: {
      display: "flex",
      flexDirection: "column",
      "& > *": {
        marginBottom: theme.spacing(2),
      },
    },
    textField: {},
    textArea: {},
    formActions: {
      display: "flex",
      justifyContent: "space-between",
      paddingTop: theme.spacing(2),
    },
  })
);
