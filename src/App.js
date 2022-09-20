import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Base/Footer";
import Index from "./Pages/Index/Index";

export default function App() {
  useEffect(() => {
    fadeOutEffect(document.querySelector(".loader"), 2.2);
    fadeOutEffect(document.querySelector("#preloder"), 3, 0.6);
  }, []);

  const fadeOutEffect = (fadeTarget, delay, animDur = 0.2) => {
    const style = `opacity: 1; transition: opacity ${animDur}s ease;`;
    fadeTarget.style = style;
    setTimeout(() => {
      fadeTarget.style = `opacity: 0; transition: opacity ${animDur}s ease;`;
      setTimeout(() => {
        fadeTarget.style = `display: none`;
      }, animDur * 1000);
    }, delay * 1000);
  };
  // preloader fucntion

  // preloader fucntion end
  return (
    <>
      <div id="preloder" ref={null}>
        <div className="loader"></div>
      </div>
      <Routes>
        <Route path="*" element={<Index />} />
      </Routes>
      <Footer />
    </>
  );
}
