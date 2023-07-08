import React from "react";

import Button from "../Button";
import SlideShow from "./SlideShow";

const InstagramSlider = () => {
  return (
    <div className="py-16">
      <h2 className="text-3xl text-forest text-center mb-16 font-semibold">
        Our Instagram
      </h2>
      <div className="overflow-x-hidden">
        <div className="flex items-center justify-between gap-4 relative overflow-x-hidden slider">
          <SlideShow />
        </div>
      </div>
      <div className="mt-16 flex items-center justify-center">
        <Button>
          <span className="text-sm text-white font-semibold">
            Follow us @instagram
          </span>
        </Button>
      </div>
    </div>
  );
};

export default InstagramSlider;
