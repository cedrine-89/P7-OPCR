import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./view/layout/Layout";
import Home from "./view/home/Home";
import About from "./view/about/About";
import Page404 from "./view/page404/Page404";
import Lease from "./view/lease/Lease";
import "./App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="logement/:id" element={<Lease />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
