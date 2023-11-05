import React from "react";

import "../styles/TopicListItem.scss";

const sampleDataForTopicListItem = {
  id: "1",
  slug: "topic-1",
  label: "Nature",
};

const TopicListItem = () => {
  const { id, slug, label} = sampleDataForTopicListItem;
  return (
    <div className="topic-list__item">
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
