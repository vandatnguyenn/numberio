import { ArrowForward } from "@mui/icons-material";
import { Grid, Box, Pagination, Typography, Card, CardMedia, CardContent, Button, Container, CardActionArea, Divider } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../../constant";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/selector";
const gamesDataTemplate = [
  {
    id: 1,
    name: "Game 1",
    description: "Game 1 description",
    image: "https://photo.tinhte.vn/store/2014/02/2376096_1_VN.png",
    link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
    typeGames: [
      {
        id: 1,
        name: "Dễ",
      },
      {
        id: 2,
        name: "Trung bình",
      },
      {
        id: 3,
        name: "Khó",
      },
    ],
    status: "ACTIVE",
    createdAt: "2021-09-01T07:00:00.000+00:00",
    updatedAt: "2021-09-01T07:00:00.000+00:00",
  },
  {
    id: 2,
    name: "Game 2",
    description: "Game 2 description",
    image:
      "https://monkeymedia.vcdn.com.vn/upload/web/storage_web/29-03-2022_15:10:35_toan-lop-2-sach-giao-khoa.jpg",
    link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
    status: "ACTIVE",
    typeGames: [
      {
        id: 1,
        name: "Dễ",
      },
      {
        id: 2,
        name: "Trung bình",
      },
      {
        id: 3,
        name: "Khó",
      },
    ],
    createdAt: "2021-09-01T07:00:00.000+00:00",
    updatedAt: "2021-09-01T07:00:00.000+00:00",
  },
  {
    id: 3,
    name: "Game 3",
    description: "Game 3 description",
    image:
      "http://cdn.voh.com.vn/voh//thumbnail/2022/07/31/cau-do-toan-hoc-voh-1.jpg",
    link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
    status: "ACTIVE",
    typeGames: [
      {
        id: 1,
        name: "Dễ",
      },
      {
        id: 2,
        name: "Trung bình",
      },
      {
        id: 3,
        name: "Khó",
      },
    ],
    createdAt: "2021-09-01T07:00:00.000+00:00",
    updatedAt: "2021-09-01T07:00:00.000+00:00",
  },
  {
    id: 4,
    name: "Game 4",
    description: "Game 4 description",
    image:
      "https://monkeymedia.vcdn.com.vn/upload/web/storage_web/29-03-2022_15:10:35_toan-lop-2-sach-giao-khoa.jpg",
    link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
    status: "ACTIVE",
    typeGames: [
      {
        id: 1,
        name: "Dễ",
      },
      {
        id: 2,
        name: "Trung bình",
      },
      {
        id: 3,
        name: "Khó",
      },
    ],
    createdAt: "2021-09-01T07:00:00.000+00:00",
    updatedAt: "2021-09-01T07:00:00.000+00:00",
  },
  {
    id: 5,
    name: "Game 5",
    description: "Game 5 description",
    image: "https://photo.tinhte.vn/store/2014/02/2376096_1_VN.png",
    link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
    status: "ACTIVE",
    typeGames: [
      {
        id: 1,
        name: "Dễ",
      },
      {
        id: 2,
        name: "Trung bình",
      },
      {
        id: 3,
        name: "Khó",
      },
    ],
    createdAt: "2021-09-01T07:00:00.000+00:00",
    updatedAt: "2021-09-01T07:00:00.000+00:00",
  },
  {
    id: 6,
    name: "Game 6",
    description: "Game 6 description",
    image:
      "http://cdn.voh.com.vn/voh//thumbnail/2022/07/31/cau-do-toan-hoc-voh-1.jpg",
    link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
    status: "ACTIVE",

    createdAt: "2021-09-01T07:00:00.000+00:00",
    updatedAt: "2021-09-01T07:00:00.000+00:00",
  },
  {
    id: 7,
    name: "Game 7",
    description: "Game 7 description",
    image: "https://photo.tinhte.vn/store/2014/02/2376096_1_VN.png",
    link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
    status: "ACTIVE",
    typeGames: [
      {
        id: 1,
        name: "Dễ",
      },
      {
        id: 2,
        name: "Trung bình",
      },
      {
        id: 3,
        name: "Khó",
      },
    ],
    createdAt: "2021-09-01T07:00:00.000+00:00",
    updatedAt: "2021-09-01T07:00:00.000+00:00",
  },
  {
    id: 8,
    name: "Game 8",
    description: "Game 8 description",
    image:
      "https://monkeymedia.vcdn.com.vn/upload/web/storage_web/29-03-2022_15:10:35_toan-lop-2-sach-giao-khoa.jpg",
    link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
    status: "ACTIVE",
    typeGames: [
      {
        id: 1,
        name: "Dễ",
      },
      {
        id: 2,
        name: "Trung bình",
      },
      {
        id: 3,
        name: "Khó",
      },
    ],
  },
];
const typeGames = [
  {
    id: 0,
    name: "Dễ",
  },
  {
    id: 1,
    name: "Trung bình",
  },
  {
    id: 2,
    name: "Khó",
  },
];

const LearningPage = () => {
  const [game, setGame] = useState(null);
  const [gamesData, setGamesData] = useState([]);
  const [page, setPage] = useState(1);
  const [typeGame, setTypeGame] = useState(1);
  const [postDataExam, setPostDataExam] = useState({});
  const user = useSelector(selectAuth).user;
  const GAME_PER_PAGE = 3;
  const NUMBER_OF_PAGE = Math.ceil(gamesData.length / GAME_PER_PAGE);
  useEffect(() => {
    // let fecthGameData = async () => {
    //   let data = await axios.get(`${BACKEND_URL}/game/all`);
    //   console.log(data);
    //   setGamesData(data.data);
    // };
    // fecthGameData();

    setGamesData(gamesDataTemplate);
  }, []);
  const handleStartGame = async () => {
    let postExam = {
      game_id: game._id,
      user_id: user,
      game_type: typeGame.id,
    };
    let exam = await axios.post(`${BACKEND_URL}/exam/post`, postExam);
    console.log(exam.data.id);
    const link = "http://" + game.gameURL + "?exam_id=" + exam.data.id;
    window.open(link, "_blank"); //TODO: Hoặc sử dụng react-router-dom và iframe để hiển thị game
  };
  return (
    <Grid container sx={{flexGrow:1}}>
      <Grid item xs={8}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, mb: 4 }}>
            Chọn trò chơi
          </Typography>
          <Grid container spacing={1}>
            {gamesData
              .filter((game, index) => {
                return (
                  index >= (page - 1) * GAME_PER_PAGE &&
                  index < page * GAME_PER_PAGE
                );
              })
              .map((game) => {
                return (
                  <Grid item xs={4} key={game.id}>
                    <Card
                      sx={{
                        boxShadow: 1,
                        borderRadius: 1,
                        border: 1,
                        borderColor:
                          game.id === game?.id ? "primary.main" : "white",
                      }}>
                      <CardActionArea
                        onClick={() => {
                          setGame(game);
                        }}>
                        <CardMedia
                          component="img"
                          height="140"
                          image={game.image}
                          alt={game.name}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                            {game.name}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {game.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                );
              })}
          </Grid>
          <Typography sx={{ mt: 2 }} component="div">
            Trang: {page} / {NUMBER_OF_PAGE}
          </Typography>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}>
            <Pagination
              color="primary"
              count={NUMBER_OF_PAGE}
              page={page}
              onChange={(event, value) => {
                setPage(value);
              }}
            />
          </div>
        </Container>
      </Grid>
      <Divider orientation="vertical" flexItem sx={{ mr: "-1px" }} height='100%' />
      <Grid
        item
        xs={4}
        sx={{
          mt: 4,
          p: 2,
        }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            p: 1,
          }}>
          <Typography variant="h3" component="div" sx={{ mt: 4, mb: 4 }}>
            Thông tin trò chơi
          </Typography>
          {game && (
            <div>
              <Typography variant="h5" component="div">
                Tên trò chơi: {game.name}
              </Typography>
              <Typography variant="h6" component="div">
                Mô tả: {game.description}
              </Typography>
              <Divider/>  
              <Box
                sx={{
                  mt: 4,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Typography variant="h6" component="div">
                  Chọn độ khó
                </Typography>
                {typeGames.map((type) => {
                  return (
                    <Button
                      variant="contained"
                      key={type.id}
                      color="info"
                      sx={{
                        width: 200,
                        mt: 2,
                      }}
                      onClick={() => {
                        setTypeGame(type);
                      }}>
                      {type.name}
                    </Button>
                  );
                })}

                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    mt: 2,
                    height: 50,
                    width: 200,
                    fontSize: 20,
                    color: 'white'
                  }}
                  endIcon={<ArrowForward />}
                  onClick={() => handleStartGame()}>
                  Bắt đầu
                </Button>
              </Box>
            </div>
          )}
        </Box>
      </Grid>
    </Grid>
  );
};


export default LearningPage;