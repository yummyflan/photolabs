import { useState } from "react";
import React from "react";

const useApplicationData = () => {
  const [openModal, setModal] = useState(false);
  const [likedPhotos, setLikedPhotos] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const state = { openModal, likedPhotos, selectedPhoto };

  const onClosePhotoDetailsModal = () => setModal(false);

  const setPhotoSelected = (photoID) => setSelectedPhoto(photoID);

  const addToFav = (photoID) => {
    setLikedPhotos([...likedPhotos, photoID]);
  };

  const removeFromFav = (photoID) => {
    const updatedPhotos = likedPhotos.filter((photo) => photo !== photoID);

    setLikedPhotos(() => updatedPhotos);
  };

  return {
    state,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    addToFav,
    removeFromFav,
    setModal
  };
};

export default useApplicationData;
