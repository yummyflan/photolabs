import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [active, setActive] = useState(false);
  const switchActive = () =>
    setActive(active === false ? true : false);
  return (
    <div className="photo-list__fav-icon" onClick={switchActive}>
      <div className="photo-list__fav-icon-svg">
          <FavIcon selected={active} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
