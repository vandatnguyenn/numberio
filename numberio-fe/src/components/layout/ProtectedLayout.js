import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../common";
import {useAuth} from "../../hooks/useAuth";
import { LoadingPage } from "../Loading";

const ProtectedLayout = () => {
  const { isAuthenticated, userInfo } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated();
      if (isAuth) {
        await userInfo();
      }
      setIsLoading(false);
    };
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
  );
};

export default ProtectedLayout;
