import React, { useEffect, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton(props) {
  const { modifyFavList, photoID, likedPhotos} = props;
  const [isLiked, setIsLiked] = useState(likedPhotos.includes(photoID));

  const handleClick = () => {
    modifyFavList(photoID);
    setIsLiked(!isLiked);
  };

  useEffect(() => {
    setIsLiked(likedPhotos.includes(photoID));
  }, [likedPhotos]);

  return (
    <div
      className="photo-list__fav-icon"
      onClick={handleClick}
    >
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
