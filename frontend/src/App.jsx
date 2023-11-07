import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    state,
    addToFav,
    removeFromFav,
    onClosePhotoDetailsModal,
    openModal
  } = useApplicationData();

  const { isModalOpen, likedPhotos, selectedPhotoData, photoData } = state;
  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topics}
        likedPhotos={likedPhotos}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
        openModal={openModal}
      />

      {isModalOpen && (
        <PhotoDetailsModal
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          selectedPhotoData={selectedPhotoData}
          />
      )}
    </div>
  );
};

export default App;
