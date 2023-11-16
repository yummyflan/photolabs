import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Main App component
const App = () => {
  // destructure state and functions from custom hook
  const { state, getPhotosByTopics, modifyFavList, openModal, closeModal } =
    useApplicationData();

  const { photoData, topicData, likedPhotos, selectedPhotoData, isModalOpen } =
    state;

  // render HomeRoute and PhotoDetailsModal components
  // isModalOpen is used to shortcircuit the PhotoDetailsModal component
  return (
    <div className="App">
      <HomeRoute
        photos={photoData}
        topics={topicData}
        likedPhotos={likedPhotos}
        modifyFavList={modifyFavList}
        openModal={openModal}
        getPhotosByTopics={getPhotosByTopics}
      />

      {isModalOpen && (
        <PhotoDetailsModal
          photos={photoData}
          selectedPhotoData={selectedPhotoData}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default App;
