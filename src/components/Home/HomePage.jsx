import React from "react";

import Hero from "./Hero";
import Explore from "./Explore";
import Service from "./Service";
import Partner from "./Partner";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-12">
      <Hero />
      <Explore />
      <Service />

      <Partner />

      <Testimonials />
    </div>
  );
}

export default Home;
