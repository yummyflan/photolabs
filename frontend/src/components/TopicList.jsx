import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

// TopicList component
const TopicList = (props) => {
  const { topics, getPhotosByTopics } = props;

  // map through topics array and render TopicListItem component
  const parsedTopics = topics.map((topic) => {
    return (
      <TopicListItem
        key={topic.id}
        topicID={topic.id}
        label={topic.title}
        getPhotosByTopics={getPhotosByTopics}
      />
    );
  });

  // render TopicList component
  return <div className="top-nav-bar__topic-list">{parsedTopics}</div>;
};

export default TopicList;
