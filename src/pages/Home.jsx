import React, { useEffect, useState } from "react";
import styled from "styled-components";
import soso from "../assets/soso.svg";
import tail from "../assets/tail.svg";
import credit from "../assets/credit.svg";
import floating from "../assets/floating.svg";
import Topbar from "../components/Topbar";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import { pageVariants } from "../animation/variants";
function Home() {
  const [searchParams] = useSearchParams();
  const noti = searchParams.get("noti");
  const swipable = searchParams.get("swipable");
  const navigate = useNavigate();
  const [coin, setCoin] = useState(0);
  useEffect(() => {
    const coinData = localStorage.getItem("coin");
    if (!coinData) localStorage.setItem("coin", 100);
    else {
      setCoin(coinData);
      localStorage.setItem("coin", coinData);
    }
  }, []);
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <TopRow>
        {/* <Title>Home</Title> */}
        <CreditBox>
          <CreditImg src={credit} />
          <CreditText>{coin}</CreditText>
        </CreditBox>
      </TopRow>
      <MessageBox
        animate={{
          y: [0, -15, 0],
        }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      >
        <MessageTitle>소소의 한마디:</MessageTitle>
        {swipable === "true" ? (
          <>
            <Message>
              소소가 이번 달에는 어떤 선물들을 준비중인지 구경해보지 않으실래요?
            </Message>
            <GoSwipeBtn
              onClick={() => {
                navigate(`/swipe/?swipable=${swipable}&noti=${noti}`);
              }}
            >
              구경하러 가기
            </GoSwipeBtn>
          </>
        ) : (
          <Message>
            나는 갓 돌린 빨래에서 나는 섬유유연제 향이 제일 좋더라 :)
          </Message>
        )}
      </MessageBox>
      <Tail
        src={tail}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      />
      <Soso
        src={soso}
        animate={{
          scaleX: [1, 0.95, 1],
          scaleY: [1, 1.05, 1],
          y: [0, -20, 0],
        }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
      />
      <Ground />
      <FloatingWrapper>
        <Floating
          src={floating}
          onClick={() => {
            navigate(`/chat/?swipable=${swipable}&noti=false`);
          }}
        />
        {noti === "true" ? <Dot /> : null}
      </FloatingWrapper>
    </Container>
  );
}

export default Home;
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
  width: calc(100% - 40px);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 22px;
`;
const Title = styled.p`
  color: var(--cg-600, #454c53);

  /* Kor/B/22 */
  font-family: Pretendard;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 33px */
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
  color: var(--cg-800, #26282b);
  font-family: Nikoovers;
  font-size: 17px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 25.5px */
`;
const MessageBox = styled(motion.div)`
  position: absolute;
  bottom: 450px;
  width: 245px;
  display: flex;
  padding: 16px 30px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-radius: 20px;
  background: var(--cg-100, #e8ebed);
  text-align: center;
`;
const MessageTitle = styled.p`
  color: var(--cg-400, #9ea4aa);
  text-align: center;
  /* Kor/M/13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
`;
const Message = styled.p`
  color: var(--cg-800, #26282b);
  text-align: center;
  /* Kor/M/15 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  word-break: keep-all;
`;
const Tail = styled(motion.img)`
  position: absolute;
  bottom: 430px;
  width: 32.941px;
  height: 24px;
`;
const Ground = styled.div`
  position: absolute;
  bottom: 50px;
  width: 100%;
  height: 300px;
  background: var(--unnamed, #f0e1db);
`;
const Soso = styled(motion.img)`
  position: absolute;
  bottom: 300px;
  width: 153.287px;
  height: 105px;
  z-index: 10;
`;
const FloatingWrapper = styled.div`
  width: 100%;
  max-width: 420px;
  position: fixed;
  bottom: 94.66px;
`;
const Floating = styled.img`
  cursor: pointer;
  position: absolute;
  right: 25.66px;
  bottom: 0;
  width: 53.34px;
  height: 53.34px;
`;
const Dot = styled.div`
  position: absolute;
  right: 20px;
  bottom: 49.34px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #b62525;
`;
const GoSwipeBtn = styled.div`
  cursor: pointer;
  display: flex;
  padding: 8px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--cg-600, #454c53);
  margin-top: 12px;
  color: var(--cg-50, #f7f8f9);

  /* Kor/M/15 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  &:active {
    scale: 0.97;
    opacity: 0.7;
  }
`;
