import Banner from "../../component/banner/Banner";
import Dropdown from "../../component/dropdown/Dropdown";
import './About.scss';

export default function About() {
  return (
    <div className="About">
      <Banner image="/img/about-background.png" text="" />
      <div className="About_Dropdown">
        <Dropdown status={false} title="Fiabilité" listing={false} children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
        <Dropdown status={false} title="Respect" listing={false} children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
        <Dropdown status={false} title="Service" listing={false} children="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
        <Dropdown status={false} title="Sécurité" listing={false} children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
      </div>
    </div>
  );
}
