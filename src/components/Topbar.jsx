import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
export default function Topbar() {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 28px;
  margin-bottom: 16px;
  justify-content: center;
  margin-bottom: 16.5px;
`;
const Logo = styled.img`
  width: 75px;
  height: auto;
`;
