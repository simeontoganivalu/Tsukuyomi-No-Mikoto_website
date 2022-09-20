import React from "react";
import { AdvancedChart } from "react-tradingview-embed";

export default function TView() {
  const widgetProps = {
    autosize: true,
    symbol: "UNISWAP:MIKOTOWETH",
    interval: "60",
    timezone: "Etc/UTC",
    theme: "light",
    style: "1",
    locale: "en",
    toolbar_bg: "#f1f3f6",
    enable_publishing: false,
    allow_symbol_change: true,
    container_id: "tradingview_ef6a1",
  };
  return <AdvancedChart widgetProps={widgetProps} />;
}
