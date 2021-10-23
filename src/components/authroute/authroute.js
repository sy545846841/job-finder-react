import React, { useEffect } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

const Authroute = () => {
  const history = useHistory();
  const pathname = useLocation().pathname;
  const publicList = ["/login", "/register"];
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
          console.log(res.data.code);
          history.push("/login");
        }
      }
    });
    //is logged?
    //current url
    //identity?
    //user info completed
    //
  }, [history]);
  return (
    <div>
      <p>jumped</p>
    </div>
  );
};

export default Authroute;
