import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Header, Footer } from "../common";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage("user", {});
  useEffect(() => {
    const lastURL = window.location.pathname;
    if (!lastURL.startsWith("/auth")) {
      if (!user) {
        navigate("/auth/login");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <>
      <Header user={user} setUser={setUser}></Header>
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
