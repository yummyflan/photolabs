import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";

const TopicList = (props) => {
  const {topics} = props;
  const parsedTopics = topics.map((topic) => {
    return (
      <TopicListItem 
        key={topic.id}
        slug={topic.slug}
        label={topic.title}
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
