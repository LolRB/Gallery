import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

const Painting = () => {
  const { paintings } = useOutletContext();
  const { paintingId } = useParams();
  const painting = paintings.find((_painting) => _painting.id === +paintingId);
  console.log(painting);

  return (
    <div>
      <h1>Painting</h1>
      <img src={painting.images[0].baseimageurl} />
    </div>
  );
};

export default Painting;
