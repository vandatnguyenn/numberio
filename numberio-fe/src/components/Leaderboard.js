import { Avatar, Select, Typography } from "@mui/material";
import React from "react";
import top1bg from "../assets/images/top1.png";
import topbg from "../assets/images/topbg.png";

const top5data = [
  {
    name: "Nguyễn Văn A",
    score: 100,
  },
  {
    name: "Nguyễn Văn B",
    score: 90,
  },
  {
    name: "Nguyễn Văn C",
    score: 80,
  },
  {
    name: "Nguyễn Văn D",
    score: 70,
  },
  {
    name: "Nguyễn Văn E",
    score: 60,
  },
];
const listgame = [
  {
    name: "Rắn săn mồi",
    id: 1,
  },
  {
    name: "Đậu xe",
    id: 2,
  },
  {
    name: "Đá banh",
    id: 3,
  }
];
const Leaderboard = () => {
  const [game, setGame] = React.useState(1);
  const handleChange = (event) => {
    setGame(event.target.value);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${topbg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
    >
      <Typography
        variant="button"
        gutterBottom
        color="#EFD91E"
        fontWeight={"bold"}
        fontSize={"1.2rem"}
        sx={{ marginTop: "1rem" }}
      >
        Bảng vàng thành tích
      </Typography>
      <Select
        native
        sx={{
          width: "40%",
          height: "30px",
          background: "#39A5D5",
          borderRadius: "10px",
          color: "#fff",
        }}
        value={game}
        onChange={handleChange}
      >
        {listgame.map((item) => (
          <option
            value={item.id}
            style={{
              background: "#39A5D5",
              borderRadius: "10px",
              color: "#fff",
            }}
          >
            {item.name}
          </option>
        ))}
      </Select>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            height: "100px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: `url(${top1bg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Typography
            variant="caption"
            width="200px"
            gutterBottom
            color="#fff"
            backgroundColor="#39A5D5"
            fontWeight={"bold"}
            fontSize={"1.2rem"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            {top5data[0].name}
          </Typography>
          <Typography
            variant="caption"
            gutterBottom
            color="#fff"
            backgroundColor="#39A5D5"
            fontWeight={"bold"}
            fontSize={"1.2rem"}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
          >
            Điểm: {top5data[0].score}
          </Typography>
        </div>
      </div>
      <div className="listtop5">
        {top5data.map((item, index) => (

          (index!==0) && <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "0.5rem",
              width: "100%",
            }}
          >
            <Avatar sx={{ bgcolor: '#39A5D5', color: '#47ffff' }}>{index+1}</Avatar>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#fff",
                    marginLeft: "1rem",
                }}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
