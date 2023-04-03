import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header, Footer } from "../common";

const ProtectedLayout = () => {
  const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setUser(user);
      } else {
        navigate("/login");
      }
    }, [navigate]);

  return (
    <>
      <Header user={user}></Header>
      <Outlet
        context={{
          user: user,
          setUser: setUser,
        }}
      ></Outlet>
      <Footer></Footer>
    </>
  );
};

export default ProtectedLayout;
