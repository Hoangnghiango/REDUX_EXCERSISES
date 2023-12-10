//Thêm thư viện và action

import axios from "axios";
import {  put, take, takeLatest } from "redux-saga/effects";
import { FETCH_USER, FETCH_USER_SUCCESS, LOGIN, LOGIN_SUCCESS } from "../redux/action";

//Khai báo BaseURL là đường url tới Mock API
const BaseURL = "https://jsonplaceholder.typicode.com/users";
// Khai báo hàm getUser():
// Fetch dữ liệu từ Mock API
// Sử dụng yield put để dispatch
// action có type FETCH_USER_SUCCESS
// payload là data lấy được từ Mock API
function* getUser(action){
    try {
        const response = yield axios.get(BaseURL);
        // Sau khi lấy được dữ liệu từ fake API
        // Dispatch một action tới reducer kèm theo dữ liệu mà API trả về
        yield put( {type:FETCH_USER_SUCCESS, payload: response.data})
    } catch (error){
        console.log("error - getUser: ", error);
    }
}
// Khai báo hàm authSagaFun():
// Lấy thông tin user từ action
// Kiểm tra thông tin đăng nhập có đúng như yêu cầu bài toán không, nếu đúng thì thực hiện 2 dispatch
// action có type LOGIN_SUCCESS, payload là user
// action có type FETCH_USER, payload là {}
function* authSagaFun(action){
    const user = action.payload;
    if (user.username === "admin" && user.password ==="letmein"){
        yield put ({ type:LOGIN_SUCCESS, payload: user});
        yield put ({ type:FETCH_USER, payload: {}});
    }
}
//Khai báo hàm rootSaga():
//có nhiệm vụ lắng nghe action và xử lí gọi hàm tương ứng
export default function* rootSaga(){
    yield take(LOGIN, authSagaFun);
    yield takeLatest(FETCH_USER, getUser);
}