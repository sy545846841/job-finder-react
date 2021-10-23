import React, { useState } from "react";
import Logo from "../../components/logo/logo";
import { useHistory, Redirect } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/user.redux";
import { Button, Input, Space } from "antd";
import styled from "styled-components";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const redirectTo = useSelector((state) => state.user.redirectTo);

  return (
    <div>
      {redirectTo ? <Redirect to={redirectTo} /> : null}
      <Logo />
      <StyleLogin>
        <Space direction="vertical">
          <Input
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input.Password
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            onClick={() => {
              dispatch(login(username, password));
            }}
            type="primary "
            block
          >
            Log in
          </Button>
          <Button
            onClick={() => {
              history.push("/register");
            }}
            type="primary"
            block
          >
            Sign up
          </Button>
        </Space>
      </StyleLogin>
    </div>
  );
};

const StyleLogin = styled.div`
  text-align: center;
`;

export default Login;
