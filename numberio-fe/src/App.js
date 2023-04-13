import { Routes, Route } from "react-router-dom";
import { NotFound, SignIn, LearningPage, AdminPage } from "./pages";
import { ProtectedLayout, AuthLayout } from "./components/layout";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<>Home</>} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
        <Route path="learning" element={<LearningPage/>} />
        <Route path="auth" element={<AuthLayout/>} >
          <Route path="login" element={<SignIn />} />
          <Route path="register" element={<>signup</>} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="adminPage" element={<AdminPage/>} />
       
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
