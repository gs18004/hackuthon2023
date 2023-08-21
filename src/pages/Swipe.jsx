import styled from "styled-components";
import Topbar2 from "../components/Topbar2";
import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import { AnimatePresence, motion } from "framer-motion";
import good from "../assets/good.svg";
import bad from "../assets/bad.svg";
import arrow from "../assets/arrow.svg";
import { pageVariants } from "../animation/variants";
import { useNavigate, useSearchParams } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../lottie/coin.json";

export default function Swipe() {
  const [searchParams] = useSearchParams();
  const noti = searchParams.get("noti");
  const navigate = useNavigate();
  const [showTutorial, setShowTutorial] = useState(true);
  const [count, setCount] = useState(0);
  const cards = [
    { name: "제니쿠키", type: "푸드", img: card1 },
    { name: "포스터 미러", type: "오브제", img: card2 },
    { name: "오브제 트레이", type: "오브제", img: card3 },
    { name: "IT/개발 도서", type: "도서", img: card4 },
    { name: "마카롱", type: "푸드", img: card5 },
  ];
  const onSwipe = (direction) => {
    if (direction === "right") {
    } else {
    }
    setCount(count + 1);
  };

  useEffect(() => {
    if (count === 5) {
      const coin = localStorage.getItem("coin");
      if (!coin) localStorage.setItem("coin", 100);
      else localStorage.setItem("coin", parseInt(coin) + 100);
    }
  }, [count]);

  return (
    <Container initial="in" animate="in" exit="out" variants={pageVariants}>
      <Topbar2
        title="스와이프"
        onBackClick={() => {
          navigate(`/?swipable=${count === 5 ? "false" : "true"}&noti=${noti}`);
        }}
      />
      <CardsContainer>
        <AnimatePresence>
          {showTutorial ? (
            <Tutorial
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "linear" }}
            >
              <TutorialText>
                카드를 스와이프 해<br />
                소소에게 취향을 알려주세요!
              </TutorialText>
              <TutorialRow>
                <TutorialColumn>
                  <Arrow src={arrow} style={{ rotate: "180deg" }} />
                  <Circle>
                    <Icon src={bad} />
                  </Circle>
                  <TutorialColumnText>별로예요</TutorialColumnText>
                </TutorialColumn>
                <TutorialColumn>
                  <Arrow src={arrow} />
                  <Circle>
                    <Icon src={good} />
                  </Circle>
                  <TutorialColumnText>좋아요</TutorialColumnText>
                </TutorialColumn>
              </TutorialRow>
              <Ok
                onClick={() => {
                  setShowTutorial(false);
                }}
              >
                확인했어요
              </Ok>
            </Tutorial>
          ) : null}
        </AnimatePresence>
        {cards.map((card, idx) => (
          <StyledTinderCard
            onSwipe={onSwipe}
            preventSwipe={[`up`, `down`]}
            swipeRequirementType="position"
            swipeThreshold="50"
          >
            <Card shadow={idx === cards.length - 1 ? "true" : "false"}>
              <CardImg src={card.img} />
              <CardBottom>
                <CardType>{card.type}</CardType>
                <CardName>{card.name}</CardName>
              </CardBottom>
            </Card>
          </StyledTinderCard>
        ))}
      </CardsContainer>
      <AnimatePresence>
        {count === 5 ? (
          <End>
            <CustomLottie animationData={animationData} loop={true} />
            <EndText
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              100 코인을 얻었어요!
              <br />
              이제 소소가 뭐하고 있는지 구경하러 가 볼까요?
            </EndText>
            <Btn
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              onClick={() => {
                navigate(`/?swipable=false&noti=${noti}`);
              }}
            >
              홈으로
            </Btn>
          </End>
        ) : null}
      </AnimatePresence>
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
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledTinderCard = styled(TinderCard)`
  margin-top: 24px;
  position: fixed;
`;
const Card = styled.div`
  display: flex;
  width: 286px;
  height: 507px;
  flex-direction: column;
  border-radius: 20px;
  background: var(--cg-00, #fff);
  box-shadow: ${(props) =>
    props.shadow === "true" ? "0px -8px 60px 0px rgba(0, 0, 0, 0.1)" : "none"};
  overflow: hidden;
`;
const CardImg = styled.img`
  width: 286px;
  height: 405px;
  object-fit: cover;
`;
const CardBottom = styled.div`
  width: 286px;
  height: 102px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 8px;
`;
const CardType = styled.div`
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--cg-600, #454c53);
  color: var(--cg-50, #f7f8f9);

  /* Kor/M/13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
  margin-left: 16px;
`;
const CardName = styled.p`
  color: #000;

  /* Kor/B/17 */
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 25.5px */
  margin-left: 16px;
`;
const Tutorial = styled(motion.div)`
  margin-top: 24px;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 286px;
  height: 507px;
  border-radius: 20px;
  background: var(--op-500, rgba(27, 29, 31, 0.6));
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
  z-index: 100;
  gap: 22px;
`;
const TutorialText = styled.p`
  color: var(--cg-100, #e8ebed);
  text-align: center;

  /* Kor/M/15 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  margin-top: 160px;
`;
const TutorialRow = styled.div`
  width: 167px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const TutorialColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0;
`;
const Arrow = styled.img`
  width: 16.502px;
  height: 13.754px;
`;
const Icon = styled.img`
  width: 24px;
  height: 24px;
`;
const Circle = styled.div`
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 48px;
  background: rgba(247, 248, 249, 0.1);
  margin-top: 22px;
`;
const TutorialColumnText = styled.p`
  color: #fff;
  text-align: center;

  /* Kor/M/13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
  margin-top: 5px;
`;
const Ok = styled.p`
  cursor: pointer;
  color: var(--cg-00, #fff);
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
  text-decoration-line: underline;
  opacity: 0.8;
  margin-top: 100px;
  padding: 20px;
`;
const End = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CustomLottie = styled(Lottie)`
  width: 280px;
  height: 280px;
  margin-top: 100px;
`;
const EndText = styled(motion.p)`
  color: #000;
  text-align: center;

  /* Kor/M/15 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  margin-top: 24px;
`;
const Btn = styled(motion.div)`
  cursor: pointer;
  position: fixed;
  bottom: 52px;
  display: flex;
  width: 352px;
  height: 32px;
  padding: 12px 0px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 10px;
  background: var(--cg-800, #26282b);
  color: var(--cg-50, #f7f8f9);

  /* Kor/M/15 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
`;
