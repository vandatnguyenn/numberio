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
import { ReactComponent as LogoNoBackground } from "../../../assets/logo/logo-no-background.svg";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../redux/selector";
import { useAuth } from "../../../hooks/useAuth";

function Header() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const auth = useSelector(selectAuth);
  const { signOut } = useAuth();
  const navbarItems = [
    {
      name: "Trang chủ",
      link: "/",
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
  const userButtonData = {
    name: `${auth.user?.name}`,
    icon: (
      <Avatar
        alt="avatar"
        sx={{ width: 25, height: 25 }}
        src={auth.user?.avatar}
      />
    ),
    options: [
      {
        name: "Trang cá nhân",
        link: "/profilePage",
      },
      {
        name: "Trang admin",
        link: "/adminPage",
      },
      {
        name: "Cài đặt",
        link: "/user/setting",
      },
      {
        name: "Đăng xuất",
        link: "/",
        function: () => {
          handleLogout();
        },
      },
    ],
  };
  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Box
      backgroundColor="background.default"
      sx={{
        padding: "0 2rem",
        height: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box className="header-left">
        <div
          className="header-logo"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <LogoNoBackground className="logo" />
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
                  backgroundColor: "#3cc2f5",
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
              {auth.isLogin && (
                <Accordion
                  sx={{
                    backgroundColor: "#3cc2f5",
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
                    {userButtonData.icon}
                    <Typography
                      sx={{
                        marginLeft: "5px",
                        fontSize: "1rem",
                        textTransform: "uppercase",
                      }}
                    >
                      {userButtonData.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    {userButtonData.options.map((option, index) => {
                      return (
                        <div key={index}>
                          <Divider />
                          {option.name === "Đăng xuất" ? (
                            <MenuItem
                              key={index}
                              onClick={() => {
                                handleLogout();
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
                    backgroundColor: "#ffffff",
                    color: "#0080c6",
                  },
                  "&:active": {
                    backgroundColor: "#ffffff",
                    color: "#0080c6",
                  },
                  "&:focus": {
                    backgroundColor: "#ffffff",
                    color: "#0080c6",
                  },
                }}
                onClick={(event) => {
                  event.preventDefault();
                  navigate(item.link);
                }}
                startIcon={item.icon}
                variant="text"
              >
                {item.name}
              </Button>
            ))}
            {auth.isLogin && (
              <div>
                <Button
                  variant="contained"
                  sx={{
                    height: "3rem",
                    width: "9rem",
                    color: "white",
                    fontSize: "0.85rem",
                    margin: "0 0.5rem",
                    borderRadius: "0.3rem",
                    "&:hover": {
                      backgroundColor: "rgb(0, 255, 142)",
                    },
                    background:
                      "linear-gradient(90deg, rgba(25,127,252,1) 0%, rgba(48,136,242,1) 48%, rgba(46,82,232,1) 100%)",
                  }}
                  onClick={(event) => {
                    setAnchorEl(event.currentTarget);
                  }}
                  startIcon={userButtonData.icon}
                  className="Header__right__item"
                >
                  {userButtonData.name.slice(0, 7) + "..."}
                </Button>
                <Menu
                  id={userButtonData.name}
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={() => {
                    setAnchorEl(null);
                  }}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  {userButtonData.options.map((option, index) => {
                    return option.name === "Đăng xuất" ? (
                      <div key={index}>
                        <Divider />
                        <MenuItem
                          key={index}
                          onClick={() => {
                            setAnchorEl(null);
                            handleLogout();
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
    </Box>
  );
}

export default Header;
