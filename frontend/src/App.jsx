import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const [openModal, setModal] = useState({ value: false, id: "" });
  return (
    <div className="App">
      <HomeRoute photos={photos} topics={topics} setModal={setModal} />

      {openModal.value && (
        <PhotoDetailsModal setModal={setModal} photos={photos[openModal.id]} />
      )}
    </div>
  );
};

export default App;
