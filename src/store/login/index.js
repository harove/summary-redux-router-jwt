import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_ERROR } from "./consts";

const initialState = {
  isLoading: false,
  success: false,
  error: false,
  data: {},
};

const loginReducer = (state = initialState, payload) => {
  switch (payload.type) {
    case LOGIN_INIT:
      return { ...state, isLoading: true };

    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: false,
        success: true,
        data: payload,
      };

      case LOGIN_ERROR:
        return {
          ...state,
          isLoading: false,
          error: true,
          success: false,
          data: payload,
        };
    default:
      return state
  }
};

export default loginReducer