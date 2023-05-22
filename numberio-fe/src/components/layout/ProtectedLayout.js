import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header, Footer } from "../common";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/selector";

const ProtectedLayout = () => {
  const navigate = useNavigate();
  const auth = useSelector(selectAuth);

  useEffect(() => {
    const lastURL = window.location.pathname;
    if (!lastURL.startsWith("/auth")) {
      if (!auth.isLogin) {
        navigate("/auth/login");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedLayout;
