import React, { useCallback, useState } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const {
    city,
    country,
    imageSource,
    name,
    profile,
    photoID,
    similarPhotos,
    addToFav,
    removeFromFav,
    openModal
  } = props;

  return (
    <article className="photo-list__item" id={photoID}>
      <PhotoFavButton
        photoID={photoID}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
      />
      <img
        src={imageSource}
        className="photo-list__image"
        onClick={() => openModal(photoID, props)}
      />
      <section className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          {name}
          <div className="photo-list__user-location ">
            {city}, {country}
          </div>
        </div>
      </section>
    </article>
  );
};

export default PhotoListItem;
