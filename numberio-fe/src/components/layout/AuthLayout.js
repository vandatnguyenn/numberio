import { Outlet, useOutletContext } from "react-router-dom";

const AuthLayout = ({ children }) => {
  const { user, setUser } = useOutletContext();
  return (
    <Outlet
      context={{
        user: user,
        setUser: setUser,
      }}
    />
  );
};

export default AuthLayout;
