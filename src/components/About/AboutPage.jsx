import React from "react";

import Hero from "./Hero";
import AbtMessage from "./AbtMessage";
import Statstics from "./Statstics";
import Gallery from "./Gallery";
import Mission from "./Mission";

function AboutPage() {
  return (
    <div className=" flex flex-col items-center gap-12">
      <Hero />
      <Mission />
      <AbtMessage />
      <Statstics />
      <Gallery />
    </div>
  );
}

export default AboutPage;
