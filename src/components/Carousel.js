import React from "react";
import Card from "../components/Card";
import { Row, Container } from "react-bootstrap";
import password from "../assests/Password.jpg";
import quiz from "../assests/Quiz.jpg";
import Election from "../assests/Election.jpg";
import Calendar from "../assests/Calendar.gif";
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Election Dashboard",
          subTitle: "Find your representative by Address!",
          imgSrc: Election,
          link: "https://elijah415hz.github.io/election-dashboard/",
          gitHub: "https://github.com/elijah415hz/election-dashboard",
          selected: false,
        },
        {
          id: 1,
          title: "Password Generator",
          subTitle: "Password Generator made with vanilla javascript",
          imgSrc: password,
          link: "https://natewinter.github.io/PasswordGenerator/",
          gitHub: "https://github.com/natewinter/PasswordGenerator",
          selected: false,
        },
        {
          id: 2,
          title: "Multichoice Quiz",
          subTitle: "Multi choice quiz created with only vanilla html and css!",
          imgSrc: quiz,
          link: "https://natewinter.github.io/Multi-Choice-Quiz",
          gitHub: "https://github.com/natewinter/Multi-Choice-Quiz",
          selected: false,
        },
        {
          id: 3,
          title: "Work Day Scheduler",
          subTitle: "Save daily tasks!",
          imgSrc: Calendar,
          link: "https://natewinter.github.io/Calender-Scheduler-/",
          gitHub: "https://github.com/natewinter/Calender-Scheduler-",
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];
    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });
    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around j-container">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
