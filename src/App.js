import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">
      <div className="firefly-bg z-25">
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
      </div>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/technologies" element={<TechnologiesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
