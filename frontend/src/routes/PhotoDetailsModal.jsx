import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { photos, selectedPhotoData, closeModal } = props;
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
  } = selectedPhotoData;

  // parse similarPhotos object and return array of similar photos
  const preparedSimilarPhotos = Object.values(similarPhotos);

  // when clicking on a similar photo in the modal, it will not open
  // since similarPhotos does not contain the full photo object,
  // it is missing it's own similarPhotos object and will not render.

  // to fix this, we need to add the missing similarPhotos object by
  // retrieving the full photo object from the photos array via the id
  const similarPhotosIDs = preparedSimilarPhotos.map((photo) => photo.id);

  // filter photos array to only include photos with similarPhotosIDs
  const similarPhotosComplete = photos
    .filter((photo) => similarPhotosIDs.includes(photo.id))
    // map over filtered photos array and return a new array of photo objects
    .map((photo) => ({ ...photo }));

    // render PhotoDetailsModal component
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => closeModal()}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <article className="photo-details-modal__images">
        <PhotoFavButton
          photoID={photoID}
          likedPhotos={likedPhotos}
          modifyFavList={modifyFavList}
        />
        <img src={imageSource} className="photo-details-modal__image" />
        <section className="photo-details-modal__photographer-details">
          <img
            src={profilePhoto}
            className="photo-details-modal__photographer-profile"
          />
          <div className="photo-details-modal__photographer-info">
            {name}
            <div className="photo-details-modal__photographer-location">
              {city}, {country}
            </div>
          </div>
        </section>
        <div className="photo-details-modal__header">Similar Photos</div>
        <PhotoList
          photos={similarPhotosComplete}
          likedPhotos={likedPhotos}
          modifyFavList={modifyFavList}
          openModal={openModal}
        />
      </article>
    </div>
  );
};

export default PhotoDetailsModal;
