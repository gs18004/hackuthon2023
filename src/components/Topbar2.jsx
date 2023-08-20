import React from "react";
import styled from "styled-components";
import arrow from "../assets/back-arrow.svg";
import { useNavigate } from "react-router-dom";
export default function Topbar2({ title, onBackClick }) {
  return (
    <Container>
      <Row>
        <Arrow src={arrow} onClick={onBackClick} />
        <Title>{title}</Title>
        <Box />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  margin-top: 24px;
  justify-content: center;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 20px;
`;
const Title = styled.p`
  color: var(--cg-500, #72787f);
  text-align: center;

  /* Kor/B/17 */
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 25.5px */
`;
const Arrow = styled.img`
  cursor: pointer;
  width: 10.077px;
  height: 18.138px;
  padding-right: 33.92px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
const Box = styled.div`
  width: 44px;
  height: 44px;
`;
