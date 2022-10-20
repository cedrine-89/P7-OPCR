import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/layout/Layout";
import Home from "./component/home/Home";
import About from "./component/about/About";
import Page404 from "./component/page404/Page404";
import Carrousel from "./component/carrousel/Carrousel";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={
            <>
              <Home />
              <Carrousel image="/img/home-background.png" text="Header de l'accueil" />
            </>}
          />
          <Route path="about" element={
            <>
              <About />
              <Carrousel image="/img/about-background.png" text="Header de la section à propos" />
            </>}
          />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
