import React from "react";
import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigationBar from "components/TopNavigationBar";

const HomeRoute = (props) => {
  const {
    photos,
    topics,
    modifyFavList,
    likedPhotos,
    openModal,
    getPhotosByTopics,
    isModalOpen,
    closeModal,
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
        modifyFavList={modifyFavList}
        openModal={openModal}
        likedPhotos={likedPhotos}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default HomeRoute;
