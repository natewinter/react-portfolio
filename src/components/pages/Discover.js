import React from "react";
import Card from "react-bootstrap/Card";
import Image from "../../assests/password.png";

function Discover() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://raw.githubusercontent.com/elijah415hz/election-dashboard/dev/elected_officials.png"
        />
        <Card.Body>
          <Card.Title>Election Dashboard</Card.Title>
          <Card.Text>
            Election Dashboard is a one stop site to get information about all
            of your US elected officials. Just enter your address, and Election
            Dashboard will display all of your elected officials, from president
            all the way down to city officials.
          </Card.Text>
          <Card.Link href="https://elijah415hz.github.io/election-dashboard/">
            Deployed Site!
          </Card.Link>
          <Card.Link href="https://elijah415hz.github.io/election-dashboard/">
            Github Repo!
          </Card.Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Password Generator!</Card.Title>
          <Card.Text>
            The password generator was my first big programming hurdle. It was
            the first project that incorporated all of my prior knowldege.
            Looking back it is was a nescesarry hurdle that helped push me to
            remember to always go back to your notes and look for new knowldege!
          </Card.Text>
          <Card.Link href="https://natewinter.github.io/PasswordGenerator/">
            Deployed Site!
          </Card.Link>
          <Card.Link href="https://github.com/natewinter/PasswordGenerator">
            Github Repo!
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Discover;
