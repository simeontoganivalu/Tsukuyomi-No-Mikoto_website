import React from "react";
import Socials from "./Socials";
import { facebook, insta, twitter } from "./SVG";

export default function Footer() {
  return (
    <div className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-text">
            <h3>Tsukuyomi No Mikoto</h3>
            <p className="sm">Rights Reserved 2022</p>
          </div>
          <div className="footer__inner-whom">
            <p className="sm gray">Designed By Augment House</p>
          </div>
          <Socials />
        </div>
      </div>
    </div>
  );
}
