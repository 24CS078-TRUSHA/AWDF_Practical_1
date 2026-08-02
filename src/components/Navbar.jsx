import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav className="navbar">
      <NavLink to="/" end className={linkClass}>
        Home
      </NavLink>
      <NavLink to="/projects" className={linkClass}>
        Projects
      </NavLink>
      <NavLink to="/contact" className={linkClass}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
