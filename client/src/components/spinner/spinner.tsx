import React from "react";
import { useTheme } from "@material-ui/core";
import Loader from "react-spinners/ScaleLoader";

const Spinner: React.FC = () => {
  const theme = useTheme();
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader height={100} width={20} color={theme.palette.primary.main} />
    </div>
  );
};

export default Spinner;
