/*import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"];

  return (
    <div className="app">
      <Header name="Trusha Patel" themeColor="#0f766e" />
      <Navbar />
      <main className="main-content">
        <About course="Computer Science Engineering" />
        <Skills skillList={skills} />
      </main>
      <Footer email="trusha@gmail.com" />
    </div>
  );
}

export default App;
*/

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer email="trusha@gmail.com" />
    </div>
  );
}

export default App;
