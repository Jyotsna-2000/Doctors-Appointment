import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import DoctorProfile from './components/DoctorProfile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;