import React from "react";

export default function UniFrame() {
  const styles = {
    theme: "light",
  };
  return (
    <div className="uniFrame">
      <div className="uniFrame__inner">
        <iframe
          src="https://app.uniswap.org/#/swap?outputCurrency=0x88ff74676591faa8317494df556bf45757c567A1&chain=mainnet"
          width="100%"
          styles={styles}
        />
      </div>
    </div>
  );
}
