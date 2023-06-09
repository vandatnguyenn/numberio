import Keycloak from 'keycloak-js';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import authSlice from '../redux/slice/authSlice';
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();
  const keycloak = useMemo(() => {
    return new Keycloak({
      url: process.env.REACT_APP_KEYCLOAK_URL,
      realm: process.env.REACT_APP_KEYCLOAK_REALM,
      clientId: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
    });
  }, []);
  const [data, setData] = useState({ user: null, token: null });
  const signIn = useCallback(async ({ email, password }) => {}, []);

  const signOut = useCallback(async () => {
    dispatch(authSlice.actions.Logout());
    await keycloak.logout();
    localStorage.removeItem('user-token');
  }, [keycloak]);

  const updateUser = useCallback((user) => {}, []);

  function storeToken(token) {}

  function hasRole(role) {
    return keycloak.hasRealmRole(role);
  }

  const userInfo = useCallback(async () => {
    try {
      const info = await keycloak.loadUserInfo();
      return {
        id: info.id,
        name: info.name,
        email: info.email,
      };
    } catch (e) {
      return {};
    }
  }, [keycloak]);

  const isAuthenticated = useCallback(async () => {
    const authenticated = await keycloak.init({
      onLoad: 'login-required',
      checkLoginIframe: false,
    });
    if (authenticated) {
      const user = await userInfo();
      const keycloakToken = keycloak.token;
      dispatch(authSlice.actions.login({ user, token: keycloakToken }));
      localStorage.setItem('user-token', JSON.stringify(keycloakToken));
    }
    return authenticated;
  }, [keycloak]);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        signIn,
        signOut,
        updateUser,
        isAuthenticated,
        userInfo,
        hasRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
