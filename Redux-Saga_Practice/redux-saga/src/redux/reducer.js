import { FETCH_USER_SUCCESS, LOGIN_SUCCESS } from "./action";

// khởi tạo giá trị mặc định cho state gốc.
const initialState = {
  user: [],
  userLogin: {},
};
// khởi tạo reducer
const rootReducer = (state = initialState, action) => {
  // handle cac action gui len
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, userLogin: action.payload };
    case FETCH_USER_SUCCESS:
      return { ...state, users: action.payload };
      default:
        return state;
  }
};
export default rootReducer;
