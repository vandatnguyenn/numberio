
import {
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate, useOutletContext } from "react-router-dom";
import Banner from "../../components/Banner";
import { useEffect } from "react";
import { Facebook, Google } from "@mui/icons-material";

const SignIn = () => {
  const navigate = useNavigate();
  //eslint-disable-next-line
  const { user, setUser } = useOutletContext();
  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, navigate]);
  const handleLogin = (data) => {
    //fecth api
    const tenplateUser={
        "id": 1,
        "username": "admin",
        "password": "admin",
        "firstName": "Nguyễn Văn",
        "lastName": "Đạt",
        "email": "sanpleemail@gmail.com",
        "phone": "0123456789",
        "address": "Hà Nội",
        "role": "ROLE_ADMIN",
        "status": "ACTIVE",
        "avatar": "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
        "createdAt": "2021-09-01T07:00:00.000+00:00",
        "updatedAt": "2021-09-01T07:00:00.000+00:00"
    }
    setUser(tenplateUser);
    navigate("/dashboard");
  };
  return (
      <Grid
        container
        style={{
          height: "85vh",
          backgroundColor: "white",
        }}
      >
        <Grid
          item
          xs="0"
          sm={7}
          md={8}
          lg={8}
          sx={{
            width: "100%",
            height: "85vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Banner />
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          md={4}
          lg={4}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 10px 10px 10px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "10px 10px 10px 10px",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            <Typography variant="h4" color="text.primary" align="center" >
              Đăng nhập
            </Typography>
            <Typography variant="body2" color="text.secondary" align="center">
              Sử dụng tài khoản Google hoặc Facebook để đăng nhập
            </Typography>
            <Divider sx={{ width: "100%", margin: "10px 0 10px 0" }} />
            <Button
              variant="contained"
              sx={{
                height: "3rem",
                width: "90%",
                color: "white",
                margin: "10px 0 10px 0",
                backgroundColor: "#db3236",
               }}
              onClick={() => handleLogin()}
            
              startIcon={<Google />}
            >
              Đăng nhập bằng Google
            </Button>
            <Typography variant="body2" color="text.secondary" align="center">
              Hoặc
            </Typography>
            <Button
              variant="contained"
              sx={{
                height: "3rem",
                width: "90%",
                color: "white",
                margin: "10px 0 10px 0",
                backgroundColor: "#3b5998",
              }}
              onClick={() => handleLogin()}
              startIcon={<Facebook />}
            >
              Đăng nhập bằng Facebook
            </Button>

          </div>
        </Grid>
      </Grid>
  );
};

export default SignIn;
