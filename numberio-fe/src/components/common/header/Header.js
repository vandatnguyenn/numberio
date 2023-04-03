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
} from "@mui/material";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  Menu as MenuIcon,
  Home,
  MenuBook,
  AlignVerticalBottom,
  QuestionAnswer,
} from "@mui/icons-material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0b5c6d",
    },
  },
});

function Header(props) {
  const { user } = props;

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
    {
      name: `${user?.lastName}`,
      link: "/user",
      icon: (
        <Avatar
          alt="avatar"
          sx={{ width: 25, height: 25 }}
          src={user?.avatar}
        />
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
    },
  ];
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          backgroundColor: "#4486F4",
          color: "white",
          padding: "0px",
          height: "15vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div className="header-left">
          <div className="header-logo">
            <img
              src="https://azco.vn/wp-content/uploads/2019/11/thumb-logo-la-gi.jpg"
              className="logo"
              alt="logo"
            />
          </div>
        </div>
        <div className="header-right">
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
            <div className="header-menu">
              {navbarItems.map(( item, index) => (
                <div key={index}
                  className="header-menu-item"
                >
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
            </div>
          )}
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default Header;
