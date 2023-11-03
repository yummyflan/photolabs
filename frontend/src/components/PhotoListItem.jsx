import React, { useCallback } from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, city, country, imageSource, username, profile } = props;
  return (
    <article className="photo-list__item">
      <img id={id} src={imageSource} className="photo-list__image" />

      <section className="photo-list__user-details">
        <img src={profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          {username}
          <br />
          <span className="photo-list__user-location ">
            {city}, {country}
          </span>
        </div>
      </section>
    </article>
  );
};

export default PhotoListItem;
