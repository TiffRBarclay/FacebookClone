import React from "react";
import "./StoryReel.css";
import Story from "./Story";

import StoryDummy from "./Images/StoryDummyImage.png";

function StoryReel() {
  return (
    <div className="story_reel">
      <Story image={StoryDummy} title="Tiffany Barclay" />
      <Story image={StoryDummy} title="Tiffany Barclay" />
      <Story image={StoryDummy} title="Tiffany Barclay" />
      <Story image={StoryDummy} title="Tiffany Barclay" />
    </div>
  );
}

export default StoryReel;
