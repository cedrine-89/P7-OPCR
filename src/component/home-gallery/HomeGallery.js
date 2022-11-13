import { useEffect, useState } from "react";
import { getAllLeases } from "../../services/Api";
import HomeGalleryModule from "../home-gallery-module/HomeGalleryModule";
import "./HomeGallery.scss";

export default function HomeGallery() {
  const [leases, setLeases] = useState([]);

  useEffect(() => {
    getAllLeases().then((data) => {
      setLeases(data);
    });
  }, []);

  return (
    <section className="HomeGallery">
      {leases.map((lease, index) => {
        return (
          <HomeGalleryModule lease={lease} key={`${lease.id}-${index}-${Math.random()}`} />
        );
      })}
    </section>
  );
}
