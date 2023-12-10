import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login"
import User from "./component/User"
import store from "./redux/store"
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/users" element={<User />}></Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
