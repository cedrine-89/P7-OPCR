import './Logo.scss';
import { Link } from "react-router-dom";

export default function Logo({ src }) {
  return (
    <Link className="Logo" to="/">
      <img src={src} alt="Logo" />
    </Link>
  );
}
