import React from "react";
import "./Feed.css";

import DummyImage from "./Images/StoryDummyImage.png";

import StoryReel from "./StoryReel";
import MessageSender from "./MessageSender";
import Post from "./Post";

function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />

      <Post
        message="Hello World"
        timestamp="This is a timestamp."
        username="Tiffany Barclay"
        image={DummyImage}
      />
      <Post
        message="Hello World"
        timestamp="This is a timestamp."
        username="Tiffany Barclay"
      />
    </div>
  );
}

export default Feed;
