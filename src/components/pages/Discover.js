import React from "react";
import Background from "./features";

function Discover() {
  return (
    <div>
      <img
        src="https://raw.githubusercontent.com/elijah415hz/election-dashboard/dev/elected_officials.png"
        className="img-fluid img-thumbnail"
        alt="My Election Dashboard img"
      ></img>
      <a href="https://elijah415hz.github.io/election-dashboard/">
        Deployed site!
      </a>
      <a href="https://github.com/elijah415hz/election-dashboard">
        Github Repo!
      </a>
      <div>
        Election Dashboard is a one stop site to get information about all of
        your US elected officials. Just enter your address, and Election
        Dashboard will display all of your elected officials, from president all
        the way down to city officials.
      </div>
      <div>
        <img
          src="https://user-images.githubusercontent.com/25919007/94608897-f1121500-0252-11eb-9b25-592341de9144.png"
          className="img-fluid img-thumbnail"
          alt="Password Generator img"
        />
        <a href="https://natewinter.github.io/PasswordGenerator/">
          Deployed site!
        </a>
        <a href="https://github.com/natewinter/PasswordGenerator">
          Github Repo!
        </a>
        <div>
          The password generator was my first big programming hurdle. It was the
          first project that incorporated all of my prior knowldege. Looking
          back it is was a nescesarry hurdle that helped push me to remember to
          always go back to your notes and look for new knowldege!
        </div>
      </div>
      <Background />
      <Background />
      <Background />
    </div>
  );
}

export default Discover;
