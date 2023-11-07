import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const { label, topicID, getPhotosByTopics } = props;
  return (
    <div className="topic-list__item">
      <span onClick={() => getPhotosByTopics(topicID)}>{label}</span>
    </div>
  );
};

export default TopicListItem;
