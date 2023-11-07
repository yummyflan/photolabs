import { useReducer, useEffect } from "react";
import axios from "axios";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
};

function reducer(state, action) {
  const {
    FAV_PHOTO_ADDED,
    FAV_PHOTO_REMOVED,
    CLOSE_MODAL,
    OPEN_MODAL,
    SET_PHOTO_DATA,
    GET_PHOTOS_BY_TOPICS,
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

    case SET_PHOTO_DATA:
      return {
        ...state,
        photoData: action.payload,
      };

    case GET_PHOTOS_BY_TOPICS:
      return {
        ...state,
        topicData: action.payload,
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
  photoData: [],
  topicData: [],
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    FAV_PHOTO_ADDED,
    FAV_PHOTO_REMOVED,
    CLOSE_MODAL,
    OPEN_MODAL,
    SET_PHOTO_DATA,
    GET_PHOTOS_BY_TOPICS,
  } = ACTIONS;

  useEffect(() => {
    axios.get("/api/photos").then((results) => {
      dispatch({ type: SET_PHOTO_DATA, payload: results.data });
    });
  }, []);

  useEffect(() => {
    axios.get("/api/topics").then((results) => {
      dispatch({ type: GET_PHOTOS_BY_TOPICS, payload: results.data });
    });
  }, []);

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
