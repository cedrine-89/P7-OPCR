import { useEffect, useState } from "react";
import { getAllLeases } from "../../services/Api";
import HomeGalleryModule from "../home-gallery-module/HomeGalleryModule";
import "./HomeGallery.scss";

export default function HomeGallery() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    getAllLeases().then((data) => {
      setLogements(data);
    });
  }, []);

  return (
    <section className="HomeGallery">
      {logements.map((logement, index) => {
        return (
          <HomeGalleryModule logement={logement} key={`${logement.id}-${index}-${Math.random()}`} />
        );
      })}
    </section>
  );
}
