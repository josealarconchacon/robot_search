import React from "react";

const Card = (props) => {
  // destructuring
  const { name, email, id } = props;
  return (
    <div className="tc bg-light-clear dib br4 pa4 ma3 grow pw2 shadow-5 ba b--near-white">
      <img alt="robot" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
