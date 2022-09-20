import React, { useState } from "react";
import FutureItem from "./FutureItem";
import { FutureModul } from "./FutureModul";

export default function Future() {
  const [future, setFuture] = useState(null);

  return (
    <section className="future">
      <div className="auto__container">
        <div className="future__inner">
          <h2>Future Developments</h2>
          <h3>Click the cards to learn more.</h3>
          <div className="future__inner-row">
            {FutureModul.map((futureItems, index) => {
              return (
                <FutureItem
                  key={index}
                  {...futureItems}
                  future={future}
                  setFuture={setFuture}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
