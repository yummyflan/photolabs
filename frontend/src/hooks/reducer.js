import { ACTIONS } from "./useApplicationData";

// reducer function to update state, called in useApplicationData.js
export default function reducer(state, action) {
  const {
    SET_PHOTO_DATA,
    SET_TOPIC_DATA,
    GET_PHOTOS_BY_TOPICS,
    FAV_PHOTO_TOGGLED,
    OPEN_MODAL,
    CLOSE_MODAL,
    SET_ERROR,
  } = ACTIONS;

  // destructure action object
  const { type, photoID, photoProps, payload } = action;

  // switch statement to determine which action to take
  switch (type) {
    case SET_PHOTO_DATA:
      return {
        ...state,
        photoData: payload,
      };

    case SET_TOPIC_DATA:
      return {
        ...state,
        topicData: payload,
      };

    case GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: payload,
      };

    case FAV_PHOTO_TOGGLED:
      if (state.likedPhotos.includes(photoID)) {
        return {
          ...state,
          likedPhotos: state.likedPhotos.filter((id) => id !== photoID),
        };
      } else {
        return {
          ...state,
          likedPhotos: [...state.likedPhotos, photoID],
        };
      }

    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: true,
        selectedPhotoData: photoProps,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };

    case SET_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      throw new Error(`Tried to reduce with unsupported action type: ${type}`);
  }
}
