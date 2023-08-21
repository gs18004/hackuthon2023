import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import soso from "../assets/soso.svg";
import tail from "../assets/tail.svg";
import credit from "../assets/credit.svg";
import floating from "../assets/floating.svg";
import Topbar from "../components/Topbar";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { pageVariants } from "../animation/variants";
import settings from "../assets/settings.svg";
function Taste() {
  const [searchParams] = useSearchParams();
  const noti = searchParams.get("noti");
  const swipable = searchParams.get("swipable");
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [left, setLeft] = useState(60);
  const ref = {
    0: ref0,
    1: ref1,
    2: ref2,
  };
  const title = {
    0: "도서",
    1: "오브제",
    2: "푸드",
  };
  useEffect(() => {
    setLeft(ref[selected].current.offsetLeft);
  }, [selected]);
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <TopRow>
        <Title>
          소소한 <Em>{title[selected]}</Em> 소포 어떠세요?
        </Title>
        <CreditBox>
          <CreditImg src={settings} />
          <CreditText>편집</CreditText>
        </CreditBox>
      </TopRow>
      <SelectRowWrapper>
        <SelectRow>
          <Select
            ref={ref0}
            opacity={selected === 0 ? "1" : "0.4"}
            fontweight={selected === 0 ? "700" : "400"}
            onClick={() => {
              setSelected(0);
            }}
          >
            도서
          </Select>
          <Select
            ref={ref1}
            opacity={selected === 1 ? "1" : "0.4"}
            fontweight={selected === 1 ? "700" : "400"}
            onClick={() => {
              setSelected(1);
            }}
          >
            오브제
          </Select>
          <Select
            ref={ref2}
            opacity={selected === 2 ? "1" : "0.4"}
            fontweight={selected === 2 ? "700" : "400"}
            onClick={() => {
              setSelected(2);
            }}
          >
            푸드
          </Select>
        </SelectRow>
        <Line />
        <SelectLine left={left} />
      </SelectRowWrapper>
    </Container>
  );
}

export default Taste;
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
  width: calc(100% - 60px);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 22px;
`;
const Title = styled.p`
  color: rgba(30, 30, 30, 0.3);

  /* Kor/B/17 */
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 25.5px */
`;
const CreditBox = styled.div`
  display: flex;
  padding: 7px 13px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: var(--cg-00, #fff);
`;
const CreditImg = styled.img`
  width: 24px;
  height: 24px;
`;
const CreditText = styled.p`
  color: var(--brand-800, #28666e);
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 25.5px */
`;
const SelectRowWrapper = styled.div`
  width: 100%;
`;
const SelectRow = styled.div`
  margin-left: 60px;
  margin-right: 60px;
  height: 10px;
  margin-top: 18px;
  padding-top: 10px;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Select = styled.div`
  width: 40px;
  color: #1e1e1e;
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: ${(props) => props.fontweight};
  line-height: 150%; /* 22.5px */
  opacity: ${(props) => props.opacity};
  text-align: center;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.1;
  background: #000;
  margin-top: 10px;
`;
const SelectLine = styled.div`
  width: 40px;
  height: 2px;
  border-radius: 2px;
  background: #1e1e1e;
  margin-left: ${(props) => props.left + "px"};
  transition: 0.4s ease;
  margin-top: -1px;
`;
const Em = styled.em`
  color: #1e1e1e;

  /* Kor/B/17 */
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
