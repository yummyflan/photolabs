import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';
import { useState } from 'react';

const HomeRoute = (props) => {
  const [likedPhotos, setLikedPhotos] = useState([]);
  const {photos, topics} = props;
  return (
    <div className="home-route">
      <TopNavigationBar topics={topics}/>
      <PhotoList photos={photos} likedPhotos={likedPhotos} setLikedPhotos={setLikedPhotos}/>
    </div>
  );
};

export default HomeRoute;
