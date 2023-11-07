import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const {topics, getPhotosByTopics} = props;
  const parsedTopics = topics.map((topic) => {
    return (
      <TopicListItem 
        key={topic.id}
        topicID={topic.id}
        slug={topic.slug}
        label={topic.title}
        getPhotosByTopics={getPhotosByTopics}
      />
    )
  })

  return (
    <div className="top-nav-bar__topic-list">
     {parsedTopics}
    </div>
  );
};

export default TopicList;
