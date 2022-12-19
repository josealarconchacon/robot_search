import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const cardComponent = robots.map((user, _index) => {
    return (
      <Card
        key={_index}
        id={robots[_index].id}
        name={robots[_index].name}
        email={robots[_index].email}
      />
    );
  });
  return <div>{cardComponent}</div>;
};
export default CardList;
