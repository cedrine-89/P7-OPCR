import { Link } from "react-router-dom";
import "./HomeGalleryModule.scss";

export default function HomeGalleryModule({ lease }) {
  return (
    <Link className="GalleryModule" to={"logement/" + lease.id}>
      <div className="GalleryModule_Image">
        <img src={lease.cover} alt={lease.title} />
        <div className="GalleryModule_Title">
          <span>
            <p>{lease.title}</p>
            <p>{lease.location}</p>
          </span>
        </div>
      </div>
    </Link>
  );
}
