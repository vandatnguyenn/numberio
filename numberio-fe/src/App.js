import { Routes, Route } from 'react-router-dom';
import { NotFound, LearningPage, HomePage } from './pages';
import ProfilePage from './pages/profile';
import { ProtectedLayout } from './components/layout';
import TestPage from './pages/testpage';

function App() {
  return (
    <Routes>
      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="learning" element={<LearningPage />} />

        <Route path="/user/profile" element={<ProfilePage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
