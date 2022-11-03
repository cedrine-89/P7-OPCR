import { Link } from "react-router-dom";
import "./HomeGalleryModule.scss";

export default function HomeGalleryModule({ logement }) {
  return (
    <Link className="GalleryModule" to={"logement/" + logement.id}>
      <div className="GalleryModule_Image">
        <img src={logement.cover} alt="" />
      </div>
      <span className="GalleryModule_Title">{logement.title}</span>
    </Link>
  );
}
