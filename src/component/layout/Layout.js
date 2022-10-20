import { NavLink, Outlet } from "react-router-dom";
import "./Layout.scss";
import Logo from "../logo/Logo";

export default function Layout() {
  return (
    <>
      <nav className="navbar">
        <Logo />
        <ul className="navbar_menu">
          <li><NavLink to="/" end>Accueil</NavLink></li>
          <li><NavLink to="/about" end>À Propos</NavLink></li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
