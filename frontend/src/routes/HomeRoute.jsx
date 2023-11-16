import React from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";

// HomeRoute component
const HomeRoute = (props) => {
  const {
    photos,
    topics,
    likedPhotos,
    modifyFavList,
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
        likedPhotos={likedPhotos}
        modifyFavList={modifyFavList}
        openModal={openModal}
      />
    </div>
  );
};

export default HomeRoute;
