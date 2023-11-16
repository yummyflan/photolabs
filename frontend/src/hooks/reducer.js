import { ACTIONS } from "./useApplicationData";

export default function reducer(state, action) {
  const {
    FAV_PHOTO_TOGGLED,
    CLOSE_MODAL,
    OPEN_MODAL,
    SET_PHOTO_DATA,
    SET_TOPIC_DATA,
    GET_PHOTOS_BY_TOPICS,
    SET_ERROR,
  } = ACTIONS;

  const photoID = action.photoID;

  switch (action.type) {

    case FAV_PHOTO_TOGGLED:
      if (state.likedPhotos.includes(photoID)) {
        return {
          ...state,
          likedPhotos: state.likedPhotos.filter(
            (id) => id !== photoID
          ),
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
        selectedPhotoData: action.photoProps,
      };

    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: false,
      };

    case SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };

    case SET_TOPIC_DATA:
      return {
        ...state,
        topicData: action.payload,
      };

    case GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        photoData: action.payload,
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}
