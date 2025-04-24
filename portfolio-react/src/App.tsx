import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home';
import { Projects } from './components/Projects';
// import { Projects } from './pages/Projects';
// import { Certifications } from './pages/Certifications';
// import { Resume } from './pages/Resume';
// import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/certifications" element={<Certifications />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
