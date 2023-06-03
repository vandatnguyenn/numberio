import { useMediaQuery, useTheme } from "@mui/material";
import { keyframes } from "@emotion/react";
import CircularProgress from "@mui/material/CircularProgress";

export const LoadingPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const changeColor = keyframes`
    0% {
      color: #ff0000;
      transform: rotate(0deg);
    }
    25% {
      color: #ffa500;
      transform: rotate(90deg);
    }
    50% {
      color: #ffff00;
      transform: rotate(180deg);
    }
    75% {
      color: #7fff00;
      transform: rotate(270deg);
    }
    100% {
      color: #ff1493;
      transform: rotate(360deg);
    }
  `;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "white",
        zIndex: 1000,
      }}
    >
      <CircularProgress
        thickness={5}
        size={isMobile ? 75 : 100}
        disableShrink
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginTop: "-50px",
          marginLeft: "-50px",
          animation: `${changeColor} 2s linear infinite`,
        }}
      />
    </div>
  );
};
