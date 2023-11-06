import React from 'react';
import '../styles/HomeRoute.scss';
import PhotoList from 'components/PhotoList';
import TopNavigationBar from 'components/TopNavigationBar';

const HomeRoute = (props) => {
  const {photos, topics} = props;
  return (
    <div className="home-route">
      <TopNavigationBar key={Object.keys(topics)} topics={topics}/>
      <PhotoList key={Object.keys(photos)} photos={photos}/>
    </div>
  );
};

export default HomeRoute;
