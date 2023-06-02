import { Routes, Route } from "react-router-dom";
import { NotFound, LearningPage } from "./pages";
import { ProtectedLayout } from "./components/layout";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<>Home</>} />
        <Route path="dashboard" element={<h1>Dashboard</h1>} />
        <Route path="learning" element={<LearningPage/>} />
       
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
