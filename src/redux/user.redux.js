import axios from "axios";
import { getRedirectPath } from "../util";
const REGISTER_SUCCESS = "REGISTER_SUCCESS";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const ERROR_MSG = "ERROR_MSG";
const LOAD_DATA = "LOAD_DATA";

const initState = {
  msg: "",
  isAuth: false,
  username: "",
  type: "",
  redirectTo: "",
};

//Reducers
export const user = (state = initState, action) => {
  switch (action.type) {
    case "REGISTER_SUCCESS":
      return {
        ...state,
        msg: "",
        isAuth: true,
        redirectTo: getRedirectPath(action.payload),
        ...action.payload,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        msg: "",
        isAuth: true,
        redirectTo: getRedirectPath(action.payload),
        ...action.payload,
      };
    case "LOAD_DATA":
      return {
        ...state,
        ...action.payload,
      };
    case "ERROR_MSG":
      return {
        ...state,
        isAuth: false,
        msg: action.msg,
      };
    default:
      return state;
  }
};

const registerSuccess = (data) => {
  return { type: REGISTER_SUCCESS, payload: data };
};
const loginSuccess = (data) => {
  return { type: LOGIN_SUCCESS, payload: data };
};
const errorMsg = (msg) => {
  return { msg, type: ERROR_MSG };
};
export const loadDate = (userinfo) => {
  console.log("user info:" + userinfo);
  return { type: LOAD_DATA, payload: userinfo };
};

export const register = ({ username, password, repeatPassword, identity }) => {
  if (!username || !password || !identity) {
    return errorMsg("You must enter username or password");
  }
  if (password !== repeatPassword) {
    return errorMsg("Password is not the same as repeat password");
  }
  return (disptch) => {
    axios
      .post("/user/register", { username, password, identity })
      .then((res) => {
        if (res.status === 200 && res.data.code === 0) {
          disptch(registerSuccess({ username, password, identity }));
        } else {
          disptch(errorMsg(res.data.msg));
        }
      });
  };
};

export const login = (username, password) => {
  if (!username || !password) {
    return errorMsg("You must enter username and password");
  }
  return (disptch) => {
    axios.post("/user/login", { username, password }).then((res) => {
      if (res.status === 200 && res.data.code === 0) {
        disptch(loginSuccess(res.data.data));
      } else {
        disptch(errorMsg(res.data.msg));
      }
    });
  };
};
