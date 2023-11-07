import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    state,
    addToFav,
    removeFromFav,
    onClosePhotoDetailsModal,
    openModal,
    getPhotosByTopics,
  } = useApplicationData();

  const { isModalOpen, likedPhotos, selectedPhotoData, photoData, topicData } =
    state;
    
  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        likedPhotos={likedPhotos}
        addToFav={addToFav}
        removeFromFav={removeFromFav}
        openModal={openModal}
        getPhotosByTopics={getPhotosByTopics}
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
