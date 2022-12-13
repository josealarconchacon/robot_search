import React from "react";

const Card = (props) => {
  // destructuring
  const { name, email, id } = props;
  return (
    <div className="tc bg-light-clear dib br4 pa5 ma2 grow pw2 shadow-5 ba b--near-white">
      <img alt="robot" src={`https://robohash.org/${id}?100x100`} />
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
