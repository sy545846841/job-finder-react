import React from "react";
//styled components
import styled from "styled-components";
import logoImg from "./logo.png";

const Logo = () => {
  return (
    <StyledImg>
      <img src={logoImg} alt="logo" />
    </StyledImg>
  );
};

const StyledImg = styled.div`
  padding: 3rem 0rem;
  text-align: center;
  img {
    height: 40vh;
  }
`;

export default Logo;
