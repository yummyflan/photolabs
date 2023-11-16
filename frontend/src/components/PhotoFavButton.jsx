import React, { useEffect, useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

// PhotoFavButton component
function PhotoFavButton(props) {
  const { photoID, likedPhotos, modifyFavList } = props;

  // sets state for isLiked by checking likedPhotos state
  // if true then fav icon is filled in
  const [isLiked, setIsLiked] = useState(likedPhotos.includes(photoID));

  // useEffect hook to update isLiked state globally each time likedPhotos is modified
  useEffect(() => {
    setIsLiked(likedPhotos.includes(photoID));
  }, [likedPhotos]);

  // handleClick function to modify likedPhotos state and isLiked state
  // setIsLiked is necessary in the click handler to update the state of the icon in modal mode
  const handleClick = () => {
    modifyFavList(photoID);
    setIsLiked(!isLiked);
  };

  return (
    <div className="photo-list__fav-icon" onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={isLiked} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
