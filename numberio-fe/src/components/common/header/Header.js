import "./Header.css";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Toolbar,
  useMediaQuery,
  IconButton,
  Drawer,
  Avatar,
  Container,
  Box,
  Menu,
  Divider,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  Home,
  MenuBook,
  AlignVerticalBottom,
  QuestionAnswer,
  Logout as LogoutIcon,
} from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6609",
    },
  },
});

function Header(props) {
  const { user, setUser } = props;
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const navbarItems = [
    {
      name: "Trang chủ",
      link: "/home",
      icon: <Home />,
    },
    {
      name: "Vào học",
      link: "/learning",
      icon: <MenuBook />,
    },
    {
      name: "Xếp hạng",
      link: "/ranking",
      icon: <AlignVerticalBottom />,
    },
    {
      name: "Hỏi đáp",
      link: "/question",
      icon: <QuestionAnswer />,
    },
  ];
  const userBox = {
    name: `${user?.lastName}`,
    icon: (
      <Avatar alt="avatar" sx={{ width: 25, height: 25 }} src={user?.avatar} />
    ),
    options: [
      {
        name: "Profile",
        link: "/user/profile",
      },
      {
        name: "Change Password",
        link: "/user/changepassword",
      },
      {
        name: "Logout",
        link: "/auth/login",
      },
    ],
  };
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#026597",
          color: "white",
          padding: "0px",
          height: "15vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box className="header-left">
          <div className="header-logo">
            <img
              src="https://azco.vn/wp-content/uploads/2019/11/thumb-logo-la-gi.jpg"
              className="logo"
              alt="logo"
            />
          </div>
        </Box>
        <Box className="header-right">
          {isSmallScreen ? (
            <Toolbar
              sx={{
                paddingRight: 2,
              }}
            >
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={(event) => {
                  setAnchorEl(event.currentTarget);
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="right"
                sx={{
                  "& .MuiDrawer-paper": {
                    backgroundColor: "#4486F4",
                    color: "white",
                  },

                  "& .MuiButtonBase-root": {
                    color: "white",
                  },
                }}
                open={Boolean(anchorEl)}
                onClose={() => setAnchorEl(null)}
              >
                <div
                  className="header-menu-drawer"
                  onClick={() => setAnchorEl(null)}
                  onKeyDown={() => setAnchorEl(null)}
                >
                  {navbarItems.map((item, index) => (
                    <div key={index}>
                      <Button
                        key={index}
                        variant="outlined"
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          color: "black",
                          border: "none",
                          marginTop: "10px",
                          marginRight: "10px",
                          width: "100%",
                        }}
                        onClick={(event) => {
                          event.preventDefault();
                          navigate(item.link);
                        }}
                        startIcon={item.icon}
                      >
                        {item.name}
                      </Button>
                    </div>
                  ))}
                </div>
              </Drawer>
            </Toolbar>
          ) : (
            <Box md={12} className="header-menu">
              {navbarItems.map((item, index) => (
                <div key={index} className="header-menu-item">
                  <Button
                    color="inherit"
                    onClick={(event) => {
                      event.preventDefault();
                      navigate(item.link);
                    }}
                    startIcon={item.icon}
                    variant="text"
                  >
                    {item.name}
                  </Button>
                </div>
              ))}
              {user ? (
                <div className="header-menu-item">
                  <Button
                    color="inherit"
                    onClick={(event) => {
                      setAnchorEl(event.currentTarget);
                    }}
                    startIcon={userBox.icon}
                    className="Header__right__item"
                  >
                    {userBox.name}
                  </Button>
                    <Menu
                      id={userBox.name}
                      anchorEl={anchorEl}
                      open={Boolean(anchorEl)}
                      onClose={() => {
                        setAnchorEl(null);
                      }}
                      MenuListProps={{
                        "aria-labelledby": "basic-button",
                      }}
                    >
                      {userBox.options.map((option, index) => {
                        return option.name === "Logout" ? (
                          <div key={index}>
                            <Divider />
                            <MenuItem
                              key={index}
                              onClick={() => {
                                setAnchorEl(null);
                                setUser(null);
                                navigate(option.link);
                              }}
                            >
                              <Button startIcon={<LogoutIcon />}>
                                Logout
                              </Button>
                            </MenuItem>
                          </div>
                        ) : (
                          <MenuItem
                            key={index}
                            onClick={() => {
                              setAnchorEl(null);                              
                              navigate(option.link);
                            }}
                          >
                            {option.name}
                          </MenuItem>
                        );
                      })}
                      </Menu>
                    </div>

              ) : (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    color: "white",
                    height: "3rem",
                    border: "2px solid",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                >
                  <Button
                    color="inherit"
                    style={{
                      marginBottom: "5px",
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/auth/login");
                    }}
                    variant="text"
                  >
                    Đăng nhập
                  </Button>
                  /
                  <Button
                    color="inherit"
                    style={{
                      marginTop: "10px",
                    }}
                    onClick={(event) => {
                      event.preventDefault();
                      navigate("/auth/register");
                    }}
                    variant="text"
                  >
                    Đăng ký
                  </Button>
                </div>
              )}
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Header;
