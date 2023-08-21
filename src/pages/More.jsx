import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { pageVariants } from "../animation/variants";
import more1 from "../assets/more1.svg";
import more2 from "../assets/more2.svg";
import more3 from "../assets/more3.svg";
import more4 from "../assets/more4.svg";
import more5 from "../assets/more5.svg";
import more6 from "../assets/more6.svg";
import more7 from "../assets/more7.svg";
function More() {
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <BoxColumn>
        <Box>
          <Title>계정</Title>
          <Row>
            <Icon src={more1} />
            <Text>비밀번호 변경</Text>
          </Row>
          <Row>
            <Icon src={more2} />
            <Text>닉네임 변경</Text>
          </Row>
        </Box>
        <Box>
          <Title>계정</Title>
          <Row>
            <Icon src={more3} />
            <Text>배송지 정보</Text>
          </Row>
          <Row>
            <Icon src={more4} />
            <Text>결제 수단</Text>
          </Row>
        </Box>
        <Box>
          <Title>기타</Title>
          <Row>
            <Icon src={more5} />
            <Text>입점 제안하기</Text>
          </Row>
          <Row>
            <Icon src={more6} />
            <Text>FAQ</Text>
          </Row>
          <Row>
            <Icon src={more7} />
            <Text>문의하기</Text>
          </Row>
        </Box>
      </BoxColumn>
    </Container>
  );
}

export default More;
const Container = styled(motion.div)`
  position: fixed;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
const BoxColumn = styled.div`
  width: 100%;
  height: calc(100vh-100px);
  display: flex;
  flex-direction: column;
  gap: 40px;
  overflow: scroll;
  padding-top: 16.5px;
  padding-bottom: 250px;
`;
const Box = styled.div`
  width: calc(100% - 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  margin-left: 20px;
`;
const Title = styled.p`
  color: var(--cg-600, #454c53);

  /* Kor/B/17 */
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 25.5px */
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
const Icon = styled.img`
  width: 38px;
  height: 38px;
`;
const Text = styled.p`
  color: var(--cg-600, #454c53);

  /* Kor/M/15 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
`;
