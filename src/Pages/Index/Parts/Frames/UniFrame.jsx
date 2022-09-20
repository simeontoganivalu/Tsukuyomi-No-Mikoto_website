import React from "react";

export default function UniFrame() {
  const styles = {
    theme: "light",
  };
  return (
    <div className="uniFrame">
      <div className="uniFrame__inner">
        <iframe
          src="https://app.uniswap.org/#/swap?outputCurrency=0x921fa0f0fe7e01e861b2cf583a54a8c3e9b40b1e&chain=mainnet"
          width="100%"
          styles={styles}
        />
      </div>
    </div>
  );
}
