// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';

//import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <NavBar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Contact page will be added later */}
          </Routes>
        </main>
       
      </div>
    </Router>
  );
}

export default App;