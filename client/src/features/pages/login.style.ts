import { makeStyles, createStyles } from "@material-ui/core/styles";

function getRandomImg() {
  return parseInt((Math.random() * (4 - 1) + 1).toString());
}

export const useStyles = makeStyles((theme) =>
  createStyles({
    layout: {
      alignItems: "center",
      background: `url(/images/login_bg_0${getRandomImg()}.jpg)`,
      backgroundSize: "cover",
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      width: "100vw",
    },
    box: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: theme.palette.type === "dark" ? "rgba(0, 0, 0, 0.90)" : "rgba(255, 255, 255, 0.90)",
      borderRadius: "1rem",
      padding: theme.spacing(3, 2),
      textAlign: "center",
      width: "25rem",
      "&::before": {
        content: "''",
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.20)",
      },
    },
    title: {
      fontSize: "2rem",
      margin: theme.spacing(0),
    },
    subTitle: {
      fontSize: "1.2rem",
      margin: theme.spacing(0),
    },
    textField: {
      margin: theme.spacing(1, 0),
      minWidth: "220px",
    },
  })
);
