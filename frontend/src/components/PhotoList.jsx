import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

// PhotoList component
const PhotoList = (props) => {
  const { photos, likedPhotos, modifyFavList, openModal } = props;

  // parse photos array and render PhotoListItem component
  const parsedPhotos = photos.map((photo) => {
    return (
      <PhotoListItem
        key={photo.id}
        photoID={photo.id}
        city={photo.location.city}
        country={photo.location.country}
        imageSource={photo.urls.full}
        name={photo.user.name}
        profilePhoto={photo.user.profile}
        similarPhotos={photo.similar_photos}
        likedPhotos={likedPhotos}
        modifyFavList={modifyFavList}
        openModal={openModal}
      />
    );
  });

  return <ul className="photo-list">{parsedPhotos}</ul>;
};

export default PhotoList;
