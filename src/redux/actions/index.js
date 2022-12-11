export const SAVE_USER = "SAVE_USER";
export const LOADING_STATE = "LOADING_STATE";
export const ERROR_STATE = "ERROR_STATE";
export const GET_MUSIC = "GET_MUSIC";
export const SET_SEARCH = "SET_SEARCH";
export const FETCH_SEARCH = "FETCH_SEARCH";
export const PLAY_MUSIC = "PLAY_MUSIC";
export const ADD_TO_FAV = "ADD_TO_FAV";

export const addToFavActoin = (song) => {
  return {
    type: ADD_TO_FAV,
    payload: song,
  };
};

export const playSongAction = (song) => {
  return {
    type: PLAY_MUSIC,
    payload: song,
  };
};
export const saveUserAction = (user) => {
  return {
    type: SAVE_USER,
    payload: user,
  };
};
export const setSearchAction = (searchquery) => {
  return {
    type: SET_SEARCH,
    payload: searchquery,
  };
};
export const fetchSearch = (value) => {
  return async (dispatch, getState) => {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/deezer/search?q=${value}`
    );

    const fetchedData = await response.json();
    dispatch({
      type: FETCH_SEARCH,
      payload: fetchedData,
    });
  };
};

export const fetchMusic = (endpoint, folder, timer) => {
  const baseEndpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=";

  return async (dispatch, getState) => {
    try {
      const response = await fetch(baseEndpoint + endpoint);
      if (response.ok) {
        const { data } = await response.json();
        setTimeout(() => {
          dispatch({
            type: GET_MUSIC,
            payload: { [folder]: data },
          });
          dispatch({
            type: LOADING_STATE,
            payload: false,
          });
        }, timer);
      } else {
        alert("Error fetching results");
        dispatch({
          type: LOADING_STATE,
          payload: false,
        });
        dispatch({
          type: ERROR_STATE,
          payload: true,
        });
      }
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOADING_STATE,
        payload: false,
      });
      dispatch({
        type: ERROR_STATE,
        payload: true,
      });
    }
  };
};
