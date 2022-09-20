import React from "react";
import TView from "./TView";
import UniFrame from "./UniFrame";

export default function Frame() {
  return (
    <section className="frames">
      <div className="auto__container">
        <div className="frames__inner">
          <UniFrame />
          <div className="frames__inner-col">
            <div className="frames__inner-item">
              <TView />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
