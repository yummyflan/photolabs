import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = (props) => {
  const { onClosePhotoDetailsModal, selectedPhotoData } = props;
  const {
    city,
    country,
    imageSource,
    name,
    profile,
    photoID,
    addToFav,
    removeFromFav,
    similarPhotos,
    favActive,
    onFav,
  } = selectedPhotoData;

  const preparedSimilarPhotos = Object.values(similarPhotos);

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => onClosePhotoDetailsModal()}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <article className="photo-details-modal__images">
        <PhotoFavButton
          photoID={photoID}
          addToFav={addToFav}
          removeFromFav={removeFromFav}
          onFav={onFav}
          favActive={favActive}
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
        <PhotoList photos={preparedSimilarPhotos} />
      </article>
    </div>
  );
};

export default PhotoDetailsModal;
