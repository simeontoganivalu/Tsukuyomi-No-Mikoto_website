import React from "react";

export default function Info() {
  const value = "0x88ff74676591faa8317494df556bf45757c567A1";
  function copy() {
    navigator.clipboard.writeText(value);
  }
  return (
    <section className="info">
      <div className="auto__container">
        <div className="info__inner">
          <div className="info__inner-row">
            <div className="infoTag">V2 Now Live</div>
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
