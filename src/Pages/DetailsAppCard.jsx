import React from "react";
import { useParams } from "react-router";

const DetailsAppCard = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Detail card info ok{id}</h1>
    </div>
  );
};

export default DetailsAppCard;
