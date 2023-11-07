import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const {addToFav, removeFromFav, photoID, likedPhotos} = props;
  const [liked, setLiked] = useState(false);
  const switchLiked = () => {
    setLiked(!liked);
  };

  const modifyFavList = () => {
    (liked === false ? addToFav(photoID) : removeFromFav(photoID))
  }
  return (
    <div className="photo-list__fav-icon" onClick={() => {switchLiked(), modifyFavList()}} >
      <div className="photo-list__fav-icon-svg">
          <FavIcon selected={liked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
