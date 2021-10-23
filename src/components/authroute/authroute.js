import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { loadDate } from "../../redux/user.redux";

const Authroute = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const pathname = useLocation().pathname;
  useEffect(() => {
    const publicList = ["/login", "/register"];
    if (publicList.indexOf(pathname) > -1) {
      return null;
    }
    //get user info
    axios.get("/user/info").then((res) => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          dispatch(loadDate(res.data.data));
          //had login info
        } else {
          history.push("/login");
        }
      }
    });
  });
  return (
    <div>
      <p>jumped</p>
    </div>
  );
};

export default Authroute;
