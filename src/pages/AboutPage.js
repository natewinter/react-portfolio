import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />

      <Content>
        <p>
          Josh Brown is a washington native, born and raised from April 27,1994
          in a multicultural home.
        </p>
        <p>
          He's a full stack engineer with experience in Javascript, Express JS,
          Node JS, MYSQL, MongoDB and React. He dreams of owning his own
          buisiness and becoming an entrepeneur (currently working on passion
          projects)
        </p>
        <p>
          You'll often catch him playing video games, looking for new music or
          meandering through life while keeping his mouth full with good food.
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
