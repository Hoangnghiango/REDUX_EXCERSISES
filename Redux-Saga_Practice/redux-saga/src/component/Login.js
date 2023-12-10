import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState({username:"", password: ""});

    const userLogin = useSelector( state => state.userLogin);
    const setValueForUser = ( key, value) => {
        const newVal = { ...user, [key] : value };
        setUser(newVal);
    };
    const login = () => {
        dispatch ( { type: "LOGIN", payload : user});
    };
    useEffect(() => {
        if( userLogin.username){
            navigate("/users");
        }
    }, [userLogin, navigate]);
    return (
      <form>
        <label>USER NAME</label>
        <input
          id="username"
          onChange={(e) => setValueForUser("username", e.target.value)}
          type="text"
        />
        <label>PASSWORD</label>
        <input
          id="password"
          onChange={(e) => setValueForUser("password", e.target.value)}
          type="password"
        />
        <button
        type="button"
        onClick= {() => {
            login();
        }}
        >Login</button>
      </form>
    );
}
export default Login;