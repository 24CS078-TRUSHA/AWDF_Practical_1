import { useState } from "react";
import "./Navbar.css";

const SECTIONS = ["home", "about", "skills", "contact"];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <nav className="navbar">
      {SECTIONS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={activeSection === id ? "active" : ""}
          onClick={() => setActiveSection(id)}
        >
          {id.charAt(0).toUpperCase() + id.slice(1)}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;