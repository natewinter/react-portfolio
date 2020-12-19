import React from "react";
import { useSpring, animated } from "react-spring";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="j-card-info" style={style}>
      <p className="j-card-title">{props.title}</p>
      <p className="j-card-sub-title">
        {props.subTitle}
        <span>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <i class="fa fa-globe j-icon" aria-hidden="true"></i>
          </a>
        </span>
        <span>
          <a href={props.gitHub} target="_blank" rel="noopener noreferrer">
            <i class="fa fa-github-square j-icon" aria-hidden="true"></i>
          </a>
        </span>
      </p>
    </animated.div>
  );
}

export default CardInfo;
