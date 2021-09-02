import { GET_USER_FAIL, GET_USER_SUCCESS, GET_USER_BEGIN } from "../const/type";

const initialState = {
  userInfo: {
    user: [],
    loading: false,
    error: null,
  },
};

const userData = (state = initialState, action) => {
  const { type, payload, error } = action;
  switch (type) {
    default:
      return {
        ...state,
      };
    case GET_USER_BEGIN:
      return {
        ...state,
        userInfo: {
          loading: true,
          // error: null,
        },
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        userInfo: {
          user: payload,
          loading: false,
          error: null,
        },
      };
    case GET_USER_FAIL:
      return {
        userInfo: {
          user: [],
          loading: false,
          error: error,
        },
      };
  }
};

export default userData;
