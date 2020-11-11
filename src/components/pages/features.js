import React from "react";
import Seattle from "../video/foggySeattle.mp4";

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
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={Seattle} type="video/mp4" />
      </video>
    </div>
  );
}

export default Background;
