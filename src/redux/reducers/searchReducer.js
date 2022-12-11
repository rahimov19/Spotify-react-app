import { SET_SEARCH, FETCH_SEARCH } from "../actions";

const initialState = {
  searchquery: "hello",
  searchData: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SEARCH:
      return {
        ...state,
        searchData: action.payload,
      };
    case SET_SEARCH:
      return { ...state, searchquery: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
