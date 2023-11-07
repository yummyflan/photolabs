import { useReducer } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
};

function reducer(state, action) {
  const {
    FAV_PHOTO_ADDED,
    FAV_PHOTO_REMOVED,
    CLOSE_MODAL,
    OPEN_MODAL,
    SET_FAV,
  } = ACTIONS;

  const photoID = action.photoID;
  switch (action.type) {
    case FAV_PHOTO_ADDED:
      return {
        ...state,
        likedPhotos: [...state.likedPhotos, photoID],
      };

    case FAV_PHOTO_REMOVED:
      return {
        ...state,
        likedPhotos: state.likedPhotos.filter((photo) => photo !== photoID),
      };

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

    default:
      throw new Error(
        `Tried to reduce with unsupported action type: ${action.type}`
      );
  }
}

const initialState = {
  isModalOpen: false,
  selectedPhotoData: null,
  likedPhotos: [],
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    FAV_PHOTO_ADDED,
    FAV_PHOTO_REMOVED,
    CLOSE_MODAL,
    OPEN_MODAL,
  } = ACTIONS;

  const addToFav = (photoID) => {
    dispatch({ type: FAV_PHOTO_ADDED, photoID: photoID });
  };

  const removeFromFav = (photoID) => {
    dispatch({ type: FAV_PHOTO_REMOVED, photoID: photoID });
  };

  const openModal = (photoID, photoProps) => {
    dispatch({ type: OPEN_MODAL, photoID: photoID, photoProps: photoProps });
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return {
    state,
    addToFav,
    removeFromFav,
    openModal,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
