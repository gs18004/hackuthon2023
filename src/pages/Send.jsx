import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { pageVariants } from "../animation/variants";
import settings from "../assets/settings.svg";
function Send() {
  const variant = (i) => {
    return {
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.3, delay: 0.075 * i },
      },
      hidden: { opacity: 0, y: -10, scale: 0.8 },
    };
  };
  const data = [
    { name: "박원빈", date: "2023/08/01", img: "" },
    { name: "김지수", date: "2023/07/17", img: "" },
    { name: "김태이", date: "2023/07/05", img: "" },
    { name: "이지연", date: "2023/06/03", img: "" },
    { name: "정규민", date: "2023/05/31", img: "" },
    { name: "성해은", date: "2023/04/22", img: "" },
    { name: "남희두", date: "2023/04/07", img: "" },
    { name: "이나연", date: "2023/04/01", img: "" },
    { name: "정현규", date: "2023/04/01", img: "" },
    { name: "박나언", date: "2023/03/31", img: "" },
    { name: "선민기", date: "2023/03/28", img: "" },
    { name: "최이현", date: "2023/03/03", img: "" },
  ];
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <TopRow>
        <NewBtn>
          <Icon src={settings} />
          <NewBtnText>새로운 친구에게 보내기</NewBtnText>
        </NewBtn>
      </TopRow>
      <BoxColumn>
        {data.map((el, idx) => (
          <BoxWrapper
            initial="hidden"
            animate="visible"
            variants={variant(idx)}
          >
            <Box>
              <BoxLeft>
                {/* <Img /> */}
                <Column>
                  <Name>{el.name}</Name>
                  <Desc>
                    <b>마지막 선물 </b>
                    {el.date}
                  </Desc>
                </Column>
              </BoxLeft>
              <Btn>보내기</Btn>
            </Box>
            {idx < data.length - 1 ? <Line /> : null}
          </BoxWrapper>
        ))}
      </BoxColumn>
    </Container>
  );
}

export default Send;
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
const TopRow = styled.div`
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 24px;
`;
const NewBtn = styled.div`
  display: flex;
  padding: 7px 13px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: var(--cg-00, #fff);
  margin-bottom: 18px;
`;
const NewBtnText = styled.p`
  color: var(--cg-800, #26282b);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
`;
const Icon = styled.img`
  width: 16px;
  height: 16px;
`;
const BoxColumn = styled.div`
  width: 100%;
  height: calc(100vh-100px);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding-bottom: 250px;
`;
const BoxWrapper = styled(motion.div)`
  width: 100%;
`;
const Box = styled.div`
  width: calc(100% - 40px);
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const BoxLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin-left: 20px;
`;
const Name = styled.div`
  color: #1e1e1e;
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 117.647% */
  letter-spacing: -0.041px;
`;
const Desc = styled.p`
  color: #1e1e1e;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: 13px; /* 118.182% */
  letter-spacing: 0.008px;
`;
const Btn = styled.div`
  cursor: pointer;
  display: flex;
  padding: 6px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--cg-800, #26282b);
  color: var(--cg-50, #f7f8f9);

  /* Kor/M/15 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.1;
  background: #000;
`;
