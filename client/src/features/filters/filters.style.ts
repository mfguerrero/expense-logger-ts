import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    group: {
      display: "flex",
      justifyContent: "flex-start",
      flexWrap: "wrap",
      alignItems: "center",
      padding: theme.spacing(3, 0),
    },
    groupItem: {
      margin: theme.spacing(0, 1, 1, 0),
    },
    inputField: {
      minWidth: "200px",
    },
    select: {
      minWidth: "150px",
    },
    ascDesc: {
      margin: theme.spacing(0.5),
    },
  })
);
