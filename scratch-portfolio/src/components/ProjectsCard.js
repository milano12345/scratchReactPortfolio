import React from "react";
const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="title">{props.data.cardtitle}</div>
      <img id="project" src={props.data.img} alt={"project"}></img>
      <div className="cardtext"> {props.data.cardtext}</div>
      <button>
        <a href={props.data.buttonlink}>Link to Code</a>
      </button>
    </div>
  );
};

export default Card;
