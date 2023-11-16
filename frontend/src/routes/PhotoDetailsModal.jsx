import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { closeModal, selectedPhotoData, photos } = props;
  const {
    city,
    country,
    imageSource,
    name,
    profile,
    photoID,
    similarPhotos,
    likedPhotos,
    modifyFavList,
    openModal,
    isModalOpen,
  } = selectedPhotoData;

  const preparedSimilarPhotos = Object.values(similarPhotos);
  const similarPhotosIDs = preparedSimilarPhotos.map((photo) => photo.id);

  const similarPhotosComplete = photos
    .filter((photo) => similarPhotosIDs.includes(photo.id))
    .map((photo) => ({ ...photo }));

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
          modifyFavList={modifyFavList}
          likedPhotos={likedPhotos}
        />
        <img src={imageSource} className="photo-details-modal__image" />
        <section className="photo-details-modal__photographer-details">
          <img
            src={profile}
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
          closeModal={closeModal}
          isModalOpen={isModalOpen}
        />
      </article>
    </div>
  );
};

export default PhotoDetailsModal;
