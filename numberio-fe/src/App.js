import { Routes, Route } from "react-router-dom";
import { NotFound, LearningPage, HomePage } from "./pages";
import { ProtectedLayout } from "./components/layout";

function App() {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<HomePage/>} />
        <Route path="learning" element={<LearningPage/>} />
       
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>

  );
}

export default App;
