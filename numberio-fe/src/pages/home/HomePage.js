import React from "react";
import {  Grid, Paper, } from "@mui/material";
import Leaderboard from "../../components/Leaderboard";
import tree from "../../assets/images/tree.png";
import bgimg from "../../assets/images/bg-img.png";
const HomePage = () => {
  return (
    <Grid container spacing={2} sx={{ margin: "0", width: "100%" ,
        background: `url(${bgimg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "bottom",
    }}>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0",
        }}
      >
        <Paper sx={{ height: "500px", width: "80%", background: '#0d294e' }} >
          <Leaderboard/>
        </Paper>
      </Grid>
      <Grid item only={"lg"} md={8} sx={{ padding: "0",
        display: {xs: "none", md: "flex"}
      }}>
        <div style={{ height: "500px", width: "100%", display:"flex", flexDirection: "row-reverse"}}>
            <img src={tree} alt="tree"
                style={{ height: "100%", objectFit: "contain"}}
             />
        </div>
      </Grid>
    </Grid>
  );
};

export default HomePage;
