import React from "react";
import Logo from "../../components/logo/logo";
import { Button } from "antd-mobile";

const Register = () => {
  return (
    <div>
      <Logo />
      <h2>Register Page</h2>

      <Button type="primary">Log in</Button>
      <Button type="primary">Sign up</Button>
    </div>
  );
};

export default Register;
