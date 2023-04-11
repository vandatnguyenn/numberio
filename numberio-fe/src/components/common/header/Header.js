import "./Header.css";
import theme from "../../../utils/theme";
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
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import { useState } from "react";
import {
  Menu as MenuIcon,
  Home,
  MenuBook,
  AlignVerticalBottom,
  QuestionAnswer,
  Logout as LogoutIcon,
  ExpandMore,
} from "@mui/icons-material";

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
        name: "Trang cá nhân",
        link: "/user/profile",
      },
      {
        name: "Đôi mật khẩu",
        link: "/user/changepassword",
      },
      {
        name: "Đăng xuất",
        link: "/auth/login",
      },
    ],
  };
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
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
                  color: "black",
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
                      fullWidth
                      style={{
                        display: "flex",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        color: "black",
                        border: "none",
                        marginTop: "10px",
                        marginRight: "10px",
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
              {user && (
                <Accordion
                  sx={{
                    backgroundColor: "#4486F4",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    border: "none",
                    color: "black",
                    marginTop: "10px",
                    width: "100%",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    sx={{
                      paddingLeft: "8px",
                    }}
                  >
                    {userBox.icon}
                    <Typography
                      sx={{
                        marginLeft: "5px",
                        fontSize: "1rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {userBox.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {userBox.options.map((option, index) => {
                      return (
                        <div key={index}>
                          <Divider />
                          {option.name === "Đăng xuất" ? (
                            <MenuItem
                              key={index}
                              onClick={() => {
                                setUser(null);
                                navigate(option.link);
                              }}
                            >
                              <LogoutIcon />
                              {option.name}
                            </MenuItem>
                          ) : (
                            <MenuItem
                              key={index}
                              onClick={() => {
                                navigate(option.link);
                              }}
                            >
                              {option.name}
                            </MenuItem>
                          )}
                        </div>
                      );
                    })}
                  </AccordionDetails>
                </Accordion>
              )}
            </Drawer>
          </Toolbar>
        ) : (
          <Box md={12} className="header-menu">
            {navbarItems.map((item, index) => (
              <Button
                key={index}
                sx={{
                  height: "3rem",
                  width: "9rem",
                  color: "white",
                  fontSize: "0.85rem",
                  margin: "0 0.5rem",
                  borderRadius: "0.3rem",
                  "&:hover": {
                    backgroundColor: "#4486F4",
                  },
                  "&:active": {
                    backgroundColor: "#4486F4",
                  },
                  "&:focus": {
                    backgroundColor: "#4486F4",
                  },
                }}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(item.link);
                }}
                startIcon={item.icon}
                variant="contained"
              >
                {item.name}
              </Button>
            ))}
            {user && (
              <div>
                <Button
                  color="primary"
                  variant="contained"
                  sx={{
                    height: "3rem",
                    width: "9rem",
                    color: "white",
                    fontSize: "0.85rem",
                    margin: "0 0.5rem",
                    borderRadius: "0.3rem",
                    "&:hover": {
                      backgroundColor: "#4486F4",
                    },
                  }}
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
                    return option.name === "Đăng xuất" ? (
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
                            {option.name}
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
            )}
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default Header;
