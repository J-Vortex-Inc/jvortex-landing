import { Routes, Route } from 'react-router-dom';
import IgreeLandingPage from '../Pages/LandingPage';


const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<IgreeLandingPage />} />
  </Routes>
);



export default AppRoutes;