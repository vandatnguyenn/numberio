import { ThemeProvider, createTheme } from "@mui/material/styles";
import { AccountCircle, CheckBox, Lock } from "@mui/icons-material";
import {
  Button,
  FormControlLabel,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import Banner from "../../components/Banner";


const theme = createTheme({
  palette: {
    primary: {
      main: "#ff6609",
    },
  },
});

const SignIn = () => {
  const navigate = useNavigate();
  //eslint-disable-next-line
  const { user, setUser } = useOutletContext();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

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
    <ThemeProvider theme={theme}>
      <Grid
        container
        style={{
          height: "85vh",
          backgroundColor: "white",
        }}
      >
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
          <form
            onSubmit={handleSubmit((data) => handleLogin(data))}
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
            <h1>Đăng Nhập</h1>
            <div>
              <p>
                Chưa có tài khoản? <Link to="/auth/register">Đăng ký</Link>
              </p>
            </div>
            <Controller
              name="username"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Tên đăng nhập là bắt buộc",
                },
                pattern: {
                  value: /^[a-zA-Z0-9]+$/,
                  message: "Tên đăng nhập không được chứa ký tự đặc biệt",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nhập tên đăng nhập"
                  variant="outlined"
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  fullWidth
                  error={Boolean(errors?.username)}
                  helperText={errors?.username?.message}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                required: {
                  value: true,
                  message: "Mật khẩu là bắt buộc",
                },
                minLength: {
                  value: 6,
                  message: "Mật khẩu phải có ít nhất 6 ký tự",
                },
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Nhập mật khẩu"
                  variant="outlined"
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                  margin="normal"
                  fullWidth
                  error={Boolean(errors?.password)}
                  helperText={
                    errors?.password?.message || (
                      <span style={{ color: "red" }}>
                        {errors?.all?.message}
                      </span>
                    )
                  }
                />
              )}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Controller
                name="remember"
                control={control}
                defaultValue={false}
                render={({ field }) => (
                  <FormControlLabel
                    control={<CheckBox color="primary" {...field} />}
                    label="Ghi nhớ tài khoản"
                  />
                )}
              />
              <Link to={"/forgot-password"}>Quên mật khẩu?</Link>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{
                height: "3rem",
                width: "9rem",
                marginTop: "10px",
                color: "white",
              }}
            >
              Đăng nhập
            </Button>
          </form>
        </Grid>
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
      </Grid>
    </ThemeProvider>
  );
};

export default SignIn;
