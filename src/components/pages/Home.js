import React from "react";
import Seattle from "../video/foggySeattle.mp4";

function Home() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position:"absolute",
          width:"100%",
          left:"100%",
          top:"50%",
          height:"100%",
          objectFit:"cover",
          transform:"translate(-50%,-50%)",
          zIndex:"-1"
        }}
      >
        <source src={Seattle} type="video/mp4"/>
        </video>
      <h1>Home Page</h1>
      <p>
       Josh Brown is a washington native, born and raised in a multicultural home. You'll often catch him playing video games, looking for new music or meandering through life while keeping his mouth full with good food. 
      </p>
    </div>
  );
}

export default Home;
