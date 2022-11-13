import { Outlet } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import "./Layout.scss";

export default function Layout() {
  return (
    <>
      <div className="padding">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
