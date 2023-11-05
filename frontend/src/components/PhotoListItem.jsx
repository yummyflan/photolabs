import React, { useCallback } from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, city, country, imageSource, username, profile } = props;
  return (
    <article className="photo-list__item">
      <PhotoFavButton />
      <img id={id} src={imageSource} className="photo-list__image" />
      <section className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          {username}
          <div className="photo-list__user-location ">
            {city}, {country}
          </div>
        </div>
      </section>
    </article>
  );
};

export default PhotoListItem;
