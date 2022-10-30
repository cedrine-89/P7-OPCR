import HomeGallery from "../../component/home-gallery/HomeGallery";
import Banner from "../../component/banner/Banner";

export default function Home() {
  return (
    <div>
      <Banner image="/img/home-background.png" text="Chez vous, partout et ailleurs" />
      <HomeGallery />
    </div>
  );
}
