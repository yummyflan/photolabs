import React, { useState } from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import photos from "mocks/photos";
import topics from "mocks/topics";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
// Note: Rendering a single component to build components in isolation

const App = () => {
  const [openModal, setModal] = useState(false);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        setModal={setModal}
      />
      {openModal && <PhotoDetailsModal />}
    </div>
  );
};

export default App;
