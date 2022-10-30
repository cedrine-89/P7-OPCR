import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../component/logo/Logo";
import Footer from "../../component/footer/Footer";
import "./Layout.scss";

export default function Layout() {
  return (
    <>
      <div className="padding">
        <header>
          <nav className="navbar">
            <Logo src="/img/Logo-Primary.png" />
            <ul className="navbar_menu">
              <li><NavLink to="/" end>Accueil</NavLink></li>
              <li><NavLink to="/about" end>A Propos</NavLink></li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
