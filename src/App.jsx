import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FAQPage from './Faq/Faq';
import { TeamsPage } from './pages/Home/TeamsPage/TeamsPage';
import Schedule from './pages/Schedule/Schedule';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/teams" element={<TeamsPage title={"Web Commitee"} />} />
        <Route path="/schedule" element={<Schedule />} />
      </Routes>
    </Router>
  );
};

export default App;
