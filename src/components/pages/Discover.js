import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Image from "../../assests/password.png";

function Discover() {
  return (
    <CardDeck style={{ width: "75%" }}>
      <Card bg="dark" text="light">
        <Card.Img
          variant="top"
          src="https://raw.githubusercontent.com/elijah415hz/election-dashboard/dev/elected_officials.png"
        />
        <Card.Body>
          <Card.Title>Election Dashboard</Card.Title>
          <Card.Text>
            App that takes user address and shows you your representatives from
            local all the way to federal
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="https://elijah415hz.github.io/election-dashboard/">
            Deployed Site!
          </Card.Link>
          <Card.Link href="https://github.com/elijah415hz/election-dashboard">
            Github Repo!
          </Card.Link>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="light">
        <Card.Img variant="top" src={Image} />
        <Card.Body>
          <Card.Title>Password Generator!</Card.Title>
          <Card.Text>
            Password generator made with vanilla javascript!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="https://natewinter.github.io/PasswordGenerator/">
            Deployed Site!
          </Card.Link>
          <Card.Link href="https://github.com/natewinter/PasswordGenerator">
            Github Repo!
          </Card.Link>
        </Card.Footer>
      </Card>
      <Card bg="dark" text="light">
        <Card.Img
          variant="top"
          src="https://user-images.githubusercontent.com/25919007/98888741-5d388900-244d-11eb-813a-fb05f0fa81b1.png"
        />
        <Card.Body>
          <Card.Title>Multichoice quiz</Card.Title>
          <Card.Text>
            Multi choice quiz created with only vanilla html and css!
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Link href="https://natewinter.github.io/PasswordGenerator/">
            Deployed Site!
          </Card.Link>
          <Card.Link href="https://github.com/natewinter/Multi-Choice-Quiz">
            Github Repo!
          </Card.Link>
        </Card.Footer>
      </Card>
    </CardDeck>
  );
}

export default Discover;
