import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {slug, label} = props;
  return (
    <div className="topic-list__item">
      <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
