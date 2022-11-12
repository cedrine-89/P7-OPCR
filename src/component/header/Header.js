import { NavLink } from "react-router-dom";
import Logo from "../logo/Logo";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <nav className="navbar">
        <Logo src="/img/Logo-Primary.png" />
        <ul className="navbar_menu">
          <li><NavLink to="/" end>Accueil</NavLink></li>
          <li><NavLink to="/about">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
