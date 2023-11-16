import React from "react";
import "../styles/TopicListItem.scss";

// TopicListItem component
const TopicListItem = (props) => {
  const { topicID, label, getPhotosByTopics } = props;

  // render TopicListItem component
  return (
    <div className="topic-list__item">
      <span onClick={() => getPhotosByTopics(topicID)}>{label}</span>
    </div>
  );
};

export default TopicListItem;
