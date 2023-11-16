import React from "react";
import PhotoFavButton from "./PhotoFavButton";
import "../styles/PhotoListItem.scss";

// PhotoListItem component
const PhotoListItem = (props) => {
  const {
    photoID,
    city,
    country,
    imageSource,
    name,
    profilePhoto,
    similarPhotos,
    likedPhotos,
    modifyFavList,
    openModal,
  } = props;

  // similarPhotos not called here but passed as props to
  // PhotoDetailsModal component through openModal hook

  // render PhotoListItem component
  return (
    <article className="photo-list__item" id={photoID}>
      <PhotoFavButton
        photoID={photoID}
        likedPhotos={likedPhotos}
        modifyFavList={modifyFavList}
      />
      <img
        src={imageSource}
        className="photo-list__image"
        onClick={() => {
          openModal(photoID, props);
        }}
      />
      <section className="photo-list__user-details">
        <img src={profilePhoto} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          {name}
          <div className="photo-list__user-location ">
            {city}, {country}
          </div>
        </div>
      </section>
    </article>
  );
};

export default PhotoListItem;
