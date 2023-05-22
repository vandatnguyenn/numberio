import {
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Banner from "../../components/Banner";
import { Facebook } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import authSlice from "../../redux/slice/authSlice";
//import { ColorRing } from 'react-loader-spinner';
//import { useEffect } from "react";
//import { useMutation } from '@tanstack/react-query';
//import { signinWithGoogle} from '../../api';


const SignIn = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //eslint-disable-next-line
  // const {mutateAsync: googleAsync, isLoading: googleIsLoading} = useMutation(signinWithGoogle);
  // useEffect(() => {
  //   async function handleGoogle(response) {
  //     const credential = response.credential;      
  //     //const result = await googleAsync({credential: credential});
  //     //do something with result 
  //     const tenplateUser={
  //       "id": 1,
  //       "username": "admin",
  //       "password": "admin",
  //       "firstName": "Nguyễn Văn",
  //       "lastName": "Đạt",
  //       "email": "sanpleemail@gmail.com",
  //       "phone": "0123456789",
  //       "address": "Hà Nội",
  //       "role": "ROLE_ADMIN",
  //       "status": "ACTIVE",
  //       "avatar": "https://kiemtientuweb.com/ckfinder/userfiles/images/avatar-fb/avatar-fb-1.jpg",
  //       "createdAt": "2021-09-01T07:00:00.000+00:00",
  //       "updatedAt": "2021-09-01T07:00:00.000+00:00"
  //   }
    
  //   /* global google */
      
  //   google.accounts.id.initialize({
  //     client_id: "671880914125-d98k469qf1dq1cvv69otuaga44i7o31f.apps.googleusercontent.com",
  //     callback: handleGoogle,
  //   });

  //   google.accounts.id.renderButton(document.getElementById("signInDiv"), {
  //     theme: "filled_black",
  //     size: "large",
  //     text: "sign_in_with",
  //     shape: "rectangular",
  //     width: 340,
  //   });    
  // }, []);
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
    const templateToken = "";
    dispatch(authSlice.actions.login({user: tenplateUser, token: templateToken}));
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
            {/* <div>
            {googleIsLoading ? <ColorRing height={20} width={20} color="red" /> : <div id="signInDiv"></div>}
            </div>
            <Typography variant="body2" color="text.secondary" align="center">
              Hoặc
            </Typography> */}
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
