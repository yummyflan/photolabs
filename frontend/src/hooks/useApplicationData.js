import { useReducer, useEffect } from "react";
import axios from "axios";
import reducer from "./reducer";

// constants for actions to avoid misspelling
export const ACTIONS = {
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  FAV_PHOTO_TOGGLED: "FAV_PHOTO_TOGGLED",
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  SET_ERROR: "SET_ERROR",
};

// set the initial state
const initialState = {
  photoData: [],
  topicData: [],
  likedPhotos: [],
  selectedPhotoData: null,
  isModalOpen: false,
  error: null,
};

// custom hook to manage state
// reducer hook is defined in frontend/src/hooks/reducer.js
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    SET_PHOTO_DATA,
    SET_TOPIC_DATA,
    GET_PHOTOS_BY_TOPICS,
    FAV_PHOTO_TOGGLED,
    OPEN_MODAL,
    CLOSE_MODAL,
    SET_ERROR,
  } = ACTIONS;

  // fetch data from the database upon initial render
  useEffect(() => {
    Promise.all([axios.get("/api/photos"), axios.get("/api/topics")])
      .then((results) => {
        dispatch({ type: SET_PHOTO_DATA, payload: results[0].data });
        dispatch({ type: SET_TOPIC_DATA, payload: results[1].data });
      })
      .catch((error) => {
        dispatch({ type: SET_ERROR, payload: error.message });
      });
  }, []);

  // fetch photos by topic ID to sort and display on homepage by topic
  const getPhotosByTopics = (topicID) => {
    axios
      .get(`/api/topics/photos/${topicID}`)
      .then((results) => {
        dispatch({ type: GET_PHOTOS_BY_TOPICS, payload: results.data });
      })
      .catch((error) => {
        dispatch({ type: SET_ERROR, payload: error.message });
      });
  };

  // toggle the likedPhotos array to add or remove a photo ID
  const modifyFavList = (photoID) => {
    dispatch({ type: FAV_PHOTO_TOGGLED, photoID: photoID });
  };

  // open modal and sends in photoID and photoProps for the selected photo
  const openModal = (photoID, photoProps) => {
    dispatch({ type: OPEN_MODAL, photoID: photoID, photoProps: photoProps });
  };

  // close modal
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  return {
    state,
    getPhotosByTopics,
    modifyFavList,
    openModal,
    closeModal,
  };
};

export default useApplicationData;
