import React from "react";

export default function Info() {
  const value = "0x921fa0f0fe7e01e861b2cf583a54a8c3e9b40b1e";
  function copy() {
    navigator.clipboard.writeText(value);
  }
  return (
    <section className="info">
      <div className="auto__container">
        <div className="info__inner">
          <div className="info__inner-row">
            <div className="infoTag">Buy/Sell Tax 2%</div>
            <div className="infoTag">Contract Renounced</div>
            <div className="infoTag">LP Locked for 88 years</div>
          </div>
          <div className="infoCopy">
            <button onClick={copy}>CA:{value}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
