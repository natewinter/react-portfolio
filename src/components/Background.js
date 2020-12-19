import React from "react";
import Seattle from "../components/video/foggySeattle.mp4";
import Rain from "../components/video/rain.mp4";

function Background() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={Rain} type="video/mp4" />
      </video>
    </div>
  );
}

export default Background;
