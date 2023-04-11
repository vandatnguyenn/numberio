import { ArrowForward } from "@mui/icons-material";
import { Grid, Box, Pagination, Typography, Card, CardMedia, CardContent, Button, Container, CardActionArea } from "@mui/material";
import { useState } from "react";

const gameTemplate = [
    {
        id: 1,
        name: "Game 1",
        description: "Game 1 description",
        image:  "https://photo.tinhte.vn/store/2014/02/2376096_1_VN.png",
        link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
        levels:[
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
            }
        ],
        status: "ACTIVE",
        createdAt: "2021-09-01T07:00:00.000+00:00",
        updatedAt: "2021-09-01T07:00:00.000+00:00"
    },
    {
        id: 2,
        name: "Game 2",
        description: "Game 2 description",
        image: "https://monkeymedia.vcdn.com.vn/upload/web/storage_web/29-03-2022_15:10:35_toan-lop-2-sach-giao-khoa.jpg",
        link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
        status: "ACTIVE",
        levels:[
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
            }
        ],
        createdAt: "2021-09-01T07:00:00.000+00:00",
        updatedAt: "2021-09-01T07:00:00.000+00:00"
    },
    {
        id: 3,
        name: "Game 3",
        description: "Game 3 description",
        image: "http://cdn.voh.com.vn/voh//thumbnail/2022/07/31/cau-do-toan-hoc-voh-1.jpg",
        link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
        status: "ACTIVE",
        levels:[
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
            }
        ],
        createdAt: "2021-09-01T07:00:00.000+00:00",
        updatedAt: "2021-09-01T07:00:00.000+00:00"
    },
    {
        id: 4,
        name: "Game 4",
        description: "Game 4 description",
        image: "https://monkeymedia.vcdn.com.vn/upload/web/storage_web/29-03-2022_15:10:35_toan-lop-2-sach-giao-khoa.jpg",
        link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
        status: "ACTIVE",
        levels:[
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
            }
        ],
        createdAt: "2021-09-01T07:00:00.000+00:00",
        updatedAt: "2021-09-01T07:00:00.000+00:00"
    },
    {
        id: 5,
        name: "Game 5",
        description: "Game 5 description",
        image: "https://photo.tinhte.vn/store/2014/02/2376096_1_VN.png",
        link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
        status: "ACTIVE",
        levels:[
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
            }
        ],
        createdAt: "2021-09-01T07:00:00.000+00:00",
        updatedAt: "2021-09-01T07:00:00.000+00:00"
    },
    {
        id: 6,
        name: "Game 6",
        description: "Game 6 description",
        image: "http://cdn.voh.com.vn/voh//thumbnail/2022/07/31/cau-do-toan-hoc-voh-1.jpg",
        link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
        status: "ACTIVE",
        levels:[
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
            }
        ],
        createdAt: "2021-09-01T07:00:00.000+00:00",
        updatedAt: "2021-09-01T07:00:00.000+00:00"
    },
    {
        id: 7,
        name: "Game 7",
        description: "Game 7 description",
        image:  "https://photo.tinhte.vn/store/2014/02/2376096_1_VN.png",
        link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
        status: "ACTIVE",
        levels:[
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
            }
        ],
        createdAt: "2021-09-01T07:00:00.000+00:00",
        updatedAt: "2021-09-01T07:00:00.000+00:00"
    },
    {
        id: 8,
        name: "Game 8",
        description: "Game 8 description",
        image: "https://monkeymedia.vcdn.com.vn/upload/web/storage_web/29-03-2022_15:10:35_toan-lop-2-sach-giao-khoa.jpg",
        link: "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
        status: "ACTIVE",
        levels:[
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
            }
        ],
    }
]
const GAME_PER_PAGE = 3;
const NUMBER_OF_PAGE = Math.ceil(gameTemplate.length / GAME_PER_PAGE);
const LearningPage = () => {
    const [game , setGame] = useState(null);
    const [page, setPage] = useState(1);
    const [level, setLevel] = useState(1);


    const handleStartGame = () => {
        console.log("Start game");
        const link = game.link + "?level=" + level;
        window.open(link, "_blank"); //TODO: Hoặc sử dụng react-router-dom và iframe để hiển thị game
    }
    return (
        <Grid container >
            <Grid item xs={8}>
                <Container 
                    maxWidth="lg"
                    sx={{ mt: 4, mb: 4}}
                >
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, mb: 4 }}>
                        Chọn trò chơi
                    </Typography>
                    <Grid container spacing={1}>
                    {gameTemplate.filter((game, index) => {
                        return index >= (page - 1) * GAME_PER_PAGE && index < page * GAME_PER_PAGE;
                    }).map((gameTemplate) => {
                        return (
                            <Grid item xs={4} 
                                key={gameTemplate.id}
                            >
                                <Card 
                                    sx={{
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    border: 1,
                                    borderColor: gameTemplate.id === game?.id ? 'primary.main' : 'white'}}
                                >
                                    <CardActionArea onClick={()=>{
                                        setGame(gameTemplate);
                                    }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={gameTemplate.image}
                                            alt="green iguana"
                                        />
                                        <CardContent>

                                            <Typography gutterBottom variant="h5" component="div">
                                                {gameTemplate.name}
                                           </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                               {gameTemplate.description}
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
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Pagination color="primary" count={NUMBER_OF_PAGE} page={page} onChange={
                    (event, value) => {
                        setPage(value);
                    }
                    } />
                    </div>
                </Container>
            </Grid>
            <Grid item xs={4}
                sx={{
                    mt: 4,
                    p: 2,
                }}
            >   
            <Box  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 1,
                    p: 1,
                    borderColor: 'grey.500',
                    borderRadius: 1,
                }}>
                <Typography variant="h5" component="div" sx={{mt: 4, mb: 4   }}>
                    Thông tin trò chơi
                </Typography>
                {game && (
                    <div>
                        <Typography variant="h6" component="div" >
                         Tên trò chơi: {game.name}
                        </Typography>
                        <Typography variant="h6" component="div" >
                            Mô tả: {game.description}
                        </Typography>
                        
                    
                    <Box sx={{ mt: 4 , display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center' }}>
                    <Typography variant="h5" component="div" >
                        Chọn độ khó
                    </Typography>
                    {game.levels?.map((levelTemplate) => {
                        return (
                            <Button
                                variant="contained"
                                sx={{ mt: 2,
                                    bgcolor: levelTemplate.id === level.id ? 'primary.main' : '#3cc2f5',
                                 }}
                                onClick={() => {
                                    setLevel(levelTemplate);
                                }}
                            >
                                {levelTemplate.name}
                            </Button>
                        );
                    })}

                    <Button variant="outlined"sx={{ mt: 2, color: '#88cd42',
                        borderColor: '#88cd42',
                        height: 50,
                        width: 200,
                        fontSize: 20,
                        '&:hover': {
                            backgroundColor: '#88cd42',
                            borderColor: '#88cd42',
                            color: 'white',
                        }
                    }}
                        endIcon={<ArrowForward />}
                        onClick={() => handleStartGame()}
                    >
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