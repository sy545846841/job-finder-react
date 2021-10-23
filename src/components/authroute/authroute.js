import React, { useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import { loadDate } from "../../redux/user.redux";

const Authroute = () => {
  const history = useHistory();
  // const pathname = useLocation().pathname;
  // const publicList = ["/login", "/register"];
  //   if (publicList.indexOf(pathname) > -1) {
  //     return null;
  //   }
  useEffect(() => {
    //get user info
    axios.get("/user/info").then((res) => {
      if (res.status === 200) {
        if (res.data.code === 0) {
          //had login info
        } else {
          // loadDate(res.data.data);
          history.push("/login");
        }
      }
    });
  }, [history]);
  return (
    <div>
      <p>jumped</p>
    </div>
  );
};

export default Authroute;
