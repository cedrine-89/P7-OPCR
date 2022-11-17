import "./Footer.scss";
import Logo from "../logo/Logo";
import logoFooter from "./img/Logo-White.png";

export default function Footer() {
  return (
    <footer>
      <Logo src={logoFooter} />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
