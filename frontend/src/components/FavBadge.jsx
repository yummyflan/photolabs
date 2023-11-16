import React from "react";
import FavIcon from "./FavIcon";
import "../styles/FavBadge.scss";

// FavBadge component is used in TopNavigationBar component
// when there is at least one photo in the likedPhotos state
// it will display the notification badge because
// isFavPhotoExist will be true when likedPhotos.length > 0
// selected is always true because we want the badge to always be filled in
const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div className="fav-badge">
      <FavIcon displayAlert={!!isFavPhotoExist} selected={true} />
    </div>
  );
};

export default FavBadge;
