import React, { useState } from "react";
import Logo from "../../components/logo/logo";
import { Redirect } from "react-router-dom";
import { Button, Input, Space, Radio } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/user.redux";

const Register = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [identity, setIdentity] = useState("employee");
  const user = {
    username,
    password,
    repeatPassword,
    identity,
  };
  const redirectTo = useSelector((state) => state.user.redirectTo);

  return (
    <div>
      {redirectTo ? <Redirect to={redirectTo} /> : null}
      <Logo />
      <StyleRegister>
        <h2>Register</h2>

        <Space direction="vertical">
          <Input
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input.Password
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <Input.Password
            onChange={(e) => setRepeatPassword(e.target.value)}
            placeholder="Comfirm Password"
          />
          <Radio.Group
            onChange={(e) => setIdentity(e.target.value)}
            value={identity}
          >
            <Radio value="employee">Employee</Radio>
            <Radio value="employer">Employer</Radio>
          </Radio.Group>
          <Button
            onClick={() => {
              dispatch(register(user));
            }}
            type="primary"
          >
            Sign Up
          </Button>
        </Space>
      </StyleRegister>
    </div>
  );
};

const StyleRegister = styled.div`
  text-align: center;
`;

export default Register;
