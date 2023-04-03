import { Routes, Route } from "react-router-dom";
import { NotFound } from "./pages";
import { ProtectedLayout } from "./components/layout";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<>Home</>} />
        <Route path="login" element={<>Signin</>} />
        <Route path="register" element={<>Signup </>} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
