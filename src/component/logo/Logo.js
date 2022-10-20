import './Logo.scss';
import k from './img/k.png';
import a from './img/a.png';
import s from './img/s.png';
import home from './img/home.png';
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className="Logo" to="/">
      <img src={k} alt="Logo" />
      <img src={home} alt="Logo" />
      <img src={s} alt="Logo" />
      <img src={a} alt="Logo" />
    </Link>
  );
}
