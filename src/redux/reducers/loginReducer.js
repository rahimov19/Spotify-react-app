import { SAVE_USER } from "../actions";

const initialState = {
  user: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default loginReducer;
