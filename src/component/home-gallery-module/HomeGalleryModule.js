import { Link } from "react-router-dom";
import "./HomeGalleryModule.scss";

export default function HomeGalleryModule({ logement }) {
  return (
    <Link className="GalleryModule" to={"logement/" + logement.id}>
      <div className="GalleryModule_Image">
        <img src={logement.cover} alt="" />
        <div className="GalleryModule_Title">
          <span>
            <p>{logement.title}</p>
            <p>{logement.location}</p>
          </span>
        </div>
      </div>
    </Link>
  );
}
