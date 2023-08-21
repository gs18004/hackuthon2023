import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { pageVariants } from "../animation/variants";
import settings from "../assets/settings.svg";
import book1 from "../assets/book1.png";
import book2 from "../assets/book2.png";
import book3 from "../assets/book3.png";
import book4 from "../assets/book4.png";
import book5 from "../assets/book5.png";
import book6 from "../assets/book6.png";
import book7 from "../assets/book7.png";
import book8 from "../assets/book8.png";
import book9 from "../assets/book9.png";
import book10 from "../assets/book10.png";
import book11 from "../assets/book11.png";
import book12 from "../assets/book12.png";
function Taste() {
  const [searchParams] = useSearchParams();
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
  const books = [
    { name: "요리", img: book1 },
    { name: "예술", img: book2 },
    { name: "역사", img: book3 },
    { name: "부동산", img: book4 },
    { name: "비즈니스", img: book5 },
    { name: "철학", img: book6 },
    { name: "에세이", img: book7 },
    { name: "자기계발", img: book8 },
    { name: "소설", img: book9 },
    { name: "시집", img: book10 },
    { name: "투자", img: book11 },
    { name: "IT", img: book12 },
  ];
  useEffect(() => {
    setLeft(ref[selected].current.offsetLeft);
  }, [selected]);

  const variant = (i) => {
    return {
      visible: {
        opacity: 1,
        transition: { duration: 0.3, delay: 0.075 * i },
      },
      hidden: { opacity: 0 },
    };
  };
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
        <GridWrapper>
          <Grid>
            <AnimatePresence>
              {selected === 0
                ? books.map((book, idx) => (
                    <Column
                      initial="hidden"
                      animate="visible"
                      variants={variant(idx)}
                    >
                      <Img src={book.img} />
                      <Name>{book.name}</Name>
                    </Column>
                  ))
                : null}
            </AnimatePresence>
          </Grid>
        </GridWrapper>
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
  padding-top: 16.5px;
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
const GridWrapper = styled.div`
  height: 500px;
  overflow: scroll;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 24px;
  margin-left: 25.5px;
  margin-right: 25.5px;
  margin-bottom: 130px;
  gap: 16.71px 0;
`;
const Column = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;
const Img = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 95px;
  object-fit: cover;
`;
const Name = styled.p`
  color: var(--cg-900, #1b1d1f);
  text-align: center;

  /* Kor/M/13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
`;
