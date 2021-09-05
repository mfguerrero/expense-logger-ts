import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    list: {
      border: `solid 1px ${theme.palette.custom.medium}`,
      borderRadius: theme.shape.borderRadius,
      marginBottom: theme.spacing(2),
    },
    header: {
      background: theme.palette.custom.light,
      borderBottom: `solid 1px ${theme.palette.custom.medium}`,
      borderRadius: `${theme.shape.borderRadius}px ${theme.shape.borderRadius}px 0 0`,
      color: theme.palette.custom.dark,
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(1.2, 1.6),
    },
    body: {},
    noitems: {
      padding: theme.spacing(3, 0),
      textAlign: "center",
      fontWeight: "bold",
      fontSize: "1.6rem",
    },
  })
);
