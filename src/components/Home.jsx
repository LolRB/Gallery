import React, { useEffect, useState } from "react";
import { API } from "../lib/api";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {
  const { paintings } = useOutletContext();

  return (
    <div>
      <h1 className="gallery">Gallery</h1>
      <div id="paintings-container">
        {paintings.map((painting) => {
          console.log(painting);
          if (
            painting.images &&
            painting.images[0] &&
            painting.images[0].baseimageurl
          ) {
            return (
              <div key={painting.id}>
                <Link to={`/paintings/${painting.id}`}>
                  <img
                    src={painting.images[0].baseimageurl}
                    className="image"
                  />
                </Link>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

//  .filter((painting) => painting.images[0].baseimageurl)

export default Home;
// const filteredImages = imagesArray.filter((image) => image.image_url);
