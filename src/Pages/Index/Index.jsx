import React from "react";
import Flowers from "../../Base/Flowers";
import Frame from "./Parts/Frames/Frame";
import Future from "./Parts/Future/Future";
import Info from "./Parts/Info";
import Intro from "./Parts/Intro";

export default function Index() {
  return (
    <main>
      <Flowers />
      <Intro />
      <Frame />
      <Info />
      <Future />
    </main>
  );
}
