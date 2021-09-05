import { makeStyles, createStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) =>
  createStyles({
    item: {
      borderBottom: `solid 1px ${theme.palette.custom.medium}`,
      color: theme.palette.custom.dark,
      padding: theme.spacing(1.6),
      fontSize: "1rem",
      display: "flex",
      alignTtems: "center",
      justifyContent: "space-between",
      textDecoration: "none",
      transition: "background .3s ease",
      "&:hover": {
        background: theme.palette.custom.light,
        cursor: "pointer",
      },
      "&:last-child": {
        borderBottom: "none",
      },
    },
    title: {
      margin: 0,
      wordBreak: "break-all",
    },
    subTitle: {
      fontSize: ".8rem",
      color: theme.palette.custom.textGray,
    },
    data: {},
  })
);
