import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";

export const ACTIONS = {
  FAV_PHOTO_TOGGLED: "FAV_PHOTO_TOGGLED",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  SET_ERROR: "SET_ERROR",
};

const initialState = {
  isModalOpen: false,
  selectedPhotoData: null,
  likedPhotos: [],
  photoData: [],
  topicData: [],
  error: null,
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    FAV_PHOTO_TOGGLED,
    CLOSE_MODAL,
    OPEN_MODAL,
    SET_PHOTO_DATA,
    SET_TOPIC_DATA,
    GET_PHOTOS_BY_TOPICS,
  } = ACTIONS;

  useEffect(() => {
    Promise.all([
      axios.get("/api/photos"),
      axios.get("/api/topics"),
    ])
    .then((results) => {
      dispatch({ type: SET_PHOTO_DATA, payload: results[0].data });
      dispatch({ type: SET_TOPIC_DATA, payload: results[1].data }); 
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error.message });
    });
  }, []);

  const getPhotosByTopics = (topicID) => {
    axios.get(`/api/topics/photos/${topicID}`)
    .then((results) => {
      dispatch({ type: GET_PHOTOS_BY_TOPICS, payload: results.data });
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error.message });
    });
  };

  const modifyFavList = (photoID) => {
    dispatch({ type: FAV_PHOTO_TOGGLED, photoID: photoID });
  }

  const openModal = (photoID, photoProps) => {
    dispatch({ type: OPEN_MODAL, photoID: photoID, photoProps: photoProps });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return {
    state,
    modifyFavList,
    openModal,
    closeModal,
    getPhotosByTopics,
  };
};

export default useApplicationData;
