import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
function Home() {
  return (
    <div>
      <Jumbotron fluid>
        <Container>
          <h1>Home Page</h1>
          <p>
            Josh Brown is a washington native, born on April 27,1994 and raised
            in a multicultural home. You'll often catch him playing video games,
            looking for new music or meandering through life while keeping his
            mouth full with good food.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default Home;
