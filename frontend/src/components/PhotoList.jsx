import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = (props) => {
  const { photos, modifyFavList, openModal, likedPhotos, isModalOpen, closeModal } = props;
  const parsedPhotos = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photoID={photo.id}
        city={photo.location.city}
        country={photo.location.country}
        imageSource={photo.urls.full}
        name={photo.user.name}
        profile={photo.user.profile}
        similarPhotos={photo.similar_photos}
        openModal={openModal}
        likedPhotos={likedPhotos}
        modifyFavList={modifyFavList}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
    );
  });

  return <ul className="photo-list">{parsedPhotos}</ul>;
};

export default PhotoList;
