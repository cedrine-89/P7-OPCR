import './LogoFooter.scss';
import { Link } from "react-router-dom";

export default function LogoFooter({ src }) {
  return (
    <Link className="LogoFooter" to="/">
      <img src={src} alt="Logo" />
    </Link>
  );
}
