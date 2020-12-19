import React from "react";

import CardInfo from "./CardInfo";

function Card(props) {
  return (
    <div
      className="d-inline-block j-card"
      onClick={(e) => props.click(props.item)}
    >
      <img
        className="j-card-image"
        src={props.item.imgSrc}
        alt={props.item.imgSrc}
      />
      {props.item.selected && (
        <CardInfo
          title={props.item.title}
          subTitle={props.item.subTitle}
          link={props.item.link}
          gitHub={props.item.gitHub}
        />
      )}
    </div>
  );
}

export default Card;
