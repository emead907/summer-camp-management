import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import CamperDetails from './pages/CamperDetails';
import Dashboard from './pages/Dashboard';
import Campers from './pages/Campers';
import Attendance from './pages/Attendance';
import Schedule from './pages/Schedule';
import Staff from './pages/Staff';
import Admin from './pages/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="campers" element={<Campers />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="schedule" element={<Schedule />} />
          <Route path="staff" element={<Staff />} />
          <Route path="admin" element={<Admin />} />
          <Route path="campers/:id" element={<CamperDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;