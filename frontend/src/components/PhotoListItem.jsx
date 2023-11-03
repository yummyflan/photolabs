import React, { useCallback } from "react";

import "../styles/PhotoListItem.scss";

const PhotoListItem = (props) => {
  const { id, city, country, imageSource, username, profile } = props
  return (
    <article>
      <img id={id} src={imageSource} />
      <img src={profile} />
      <p>
        {username}
      </p>
      <p>
        {city}, {country}
      </p>

    </article>

  )
};

export default PhotoListItem;
