import React, { useState } from "react";
import { cancel } from "../../../../Base/SVG";

export default function FutureItem(props) {
  return (
    <div className={`futureCard ${props.future === props.id ? "active" : ""}`}>
      <div className="futureCard__inner">
        <div
          className="futureCard__front"
          onClick={() => props.setFuture(props.id)}
        >
          <h2>{props.title}</h2>
        </div>
        <div className="futureCard__back">
          <button
            type="button"
            className="futureCard__back-close"
            onClick={() => props.setFuture(null)}
          >
            {cancel}
          </button>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}
