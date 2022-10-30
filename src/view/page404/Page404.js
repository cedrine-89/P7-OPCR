import { Link } from "react-router-dom";
import "./Page404.scss";

export default function Page404() {
  return (
    <div className="page404">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link className="" to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}
