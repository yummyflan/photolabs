import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const {
    state,
    modifyFavList,
    closeModal,
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
        modifyFavList={modifyFavList}
        openModal={openModal}
        getPhotosByTopics={getPhotosByTopics}
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />

      {isModalOpen && (
        <PhotoDetailsModal
          closeModal={closeModal}
          selectedPhotoData={selectedPhotoData}
          photos={photoData}
        />
      )}
    </div>
  );
};

export default App;
