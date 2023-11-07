import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    state,
    onClosePhotoDetailsModal,
    setPhotoSelected,
    addToFav,
    removeFromFav,
    setModal
  } = useApplicationData();

  const { openModal, likedPhotos, selectedPhoto } = state;
  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        addToFav={addToFav}
        likedPhotos={likedPhotos}
        removeFromFav={removeFromFav}
        setModal={setModal}
      />

      {openModal && (
        <PhotoDetailsModal
          onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          openModal={openModal}
        />
      )}
    </div>
  );
};

export default App;
