import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import { applyMiddleware, createStore } from "redux";
import rootSaga from "../saga/userSaga";

//Apply MiddleWare
const sagaMiddleware = createSagaMiddleware();

//Dang ky reducer cho redux quan li
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// Chạy middleware cho redux để chạy các effect tại dòng code

sagaMiddleware.run(rootSaga);

export default store;