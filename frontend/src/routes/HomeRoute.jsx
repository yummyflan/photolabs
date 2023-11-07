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
    getPhotosByTopics,
  } = props;

  return (
    <div className="home-route">
      <TopNavigationBar
        topics={topics}
        isFavPhotoExist={likedPhotos.length}
        getPhotosByTopics={getPhotosByTopics}
      />
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
