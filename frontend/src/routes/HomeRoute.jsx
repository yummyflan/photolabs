import React from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";

const HomeRoute = (props) => {
  const {
    photos,
    topics,
    addToFav,
    removeFromFav,
    likedPhotos,
    openModal,

  } = props;
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics} isFavPhotoExist={likedPhotos.length} />
      <PhotoList
        photos={photos}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
