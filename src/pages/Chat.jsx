import styled from "styled-components";
import Topbar2 from "../components/Topbar2";
import TinderCard from "react-tinder-card";
import { useEffect, useRef, useState } from "react";
import card1 from "../assets/card1.png";
import { AnimatePresence, motion } from "framer-motion";
import good from "../assets/good.svg";
import bad from "../assets/bad.svg";
import arrow from "../assets/arrow.svg";
import OpenBtn from "../components/OpenBtn";
import { pageVariants } from "../animation/variants";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Chat() {
  const [searchParams] = useSearchParams();
  const swipable = searchParams.get("swipable");
  const navigate = useNavigate();
  const variant = (i) => {
    return {
      visible: {
        opacity: 1,
        transition: { duration: 0.4, delay: 0.15 * i - 0.3 },
      },
      hidden: { opacity: 0 },
    };
  };
  const bottomRef = useRef(null);
  // useEffect(() => {
  //   bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, []);
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Topbar2
        title="소포함"
        onBackClick={() => {
          navigate(`/?swipable=${swipable}&noti=false`);
        }}
      />
      <ChatColumnWrapper>
        <ChatColumn>
          <DateWrapper initial="hidden" animate="visible" variants={variant(2)}>
            <Date>2023년 7월</Date>
          </DateWrapper>
          <ChatBox initial="hidden" animate="visible" variants={variant(2)}>
            요즘 밥은 잘 챙겨 먹고 다니지?
          </ChatBox>
          <ChatBox initial="hidden" animate="visible" variants={variant(3)}>
            <p>
              <b style={{ gap: 0 }}>[행복소포] </b>
              7월 상품 배송 완료 안내 <br />
              <br />
              소소한 행복을 전하는 행복소포입니다.
              <br />
              고객님의 소중한 상품이 문앞에서 기다리고 있습니다.
              <br />
              소포를 열어 확인해주세요 :)
            </p>
            <OpenBtn
              onClick={() => {
                navigate(`/product/?swipable=${swipable}&noti=false&month=7`);
              }}
            />
          </ChatBox>
          <DateWrapper initial="hidden" animate="visible" variants={variant(4)}>
            <Date>2023년 8월</Date>
          </DateWrapper>
          <ChatBox initial="hidden" animate="visible" variants={variant(4)}>
            나는 갓 돌린 빨래에서 나는 섬유유연제 향이 제일 좋더라 :)
          </ChatBox>
          <ChatBox
            ref={bottomRef}
            initial="hidden"
            animate="visible"
            variants={variant(5)}
          >
            <p>
              <b style={{ gap: 0 }}>[행복소포] </b>
              8월 상품 배송 완료 안내 <br />
              <br />
              소소한 행복을 전하는 행복소포입니다.
              <br />
              고객님의 소중한 상품이 문앞에서 기다리고 있습니다.
              <br />
              소포를 열어 확인해주세요 :)
            </p>
            <OpenBtn
              onClick={() => {
                navigate(`/product/?swipable=${swipable}&noti=false&month=8`);
              }}
            />
          </ChatBox>
        </ChatColumn>
      </ChatColumnWrapper>
    </Container>
  );
}

const Container = styled(motion.div)`
  position: fixed;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: var(--cg-100, #e8ebed);
`;
const ChatColumnWrapper = styled.div`
  width: calc(100% - 20px);
  margin-left: 20px;
  height: 100%;
  overflow: scroll;
`;
const ChatColumn = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 28px;
  margin-bottom: 150px;
`;
const DateWrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Date = styled.div`
  margin-right: 20px;
  display: flex;
  padding: 4px 12px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 1000px;
  background: var(--cg-200, #c9cdd2);
  color: var(--cg-50, #f7f8f9);
  text-align: center;

  /* Kor/M/13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
`;
const ChatBox = styled(motion.div)`
  display: flex;
  width: 218px;
  padding: 20px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 20px;
  background: var(--cg-50, #f7f8f9);
  color: var(--cg-800, #26282b);

  align-self: stretch;
  /* Kor/M/13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
  text-align: start;
`;
