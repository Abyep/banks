import { SAVE_BANKS } from "../Saga/index";

const initialState = {
  banks: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_BANKS: {
      return {
        ...state,
        banks: action.banks,
      };
    }
    default:
      return state;
  }
};

export default reducer;
