import React from "react";
import Socials from "../../../Base/Socials";

export default function Intro() {
  return (
    <section className="intro">
      <div className="auto__container">
        <div className="intro__header">
          <Socials />
          <div className="intro__logo">
            <img src={process.env.PUBLIC_URL + "/images/girl.png"} alt="girl" />
          </div>
        </div>
        <div className="intro__inner">
          <h1>
            Tsukuyomi-No <br /> Mikoto
          </h1>
          <div className="button__row">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://app.uniswap.org/#/swap?outputCurrency=0x88ff74676591faa8317494df556bf45757c567A1&chain=mainnet"
              className="button primary"
            >
              Buy Now
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.dextools.io/app/en/ether/pair-explorer/0xb1ae9179adc780357b99298f0e5b0e2cb4d922a7"
              className="button primary"
            >
              Chart
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={process.env.PUBLIC_URL + "/whitePaper.pdf"}
              className="button primary"
            >
              White Paper
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
