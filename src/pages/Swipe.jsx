import styled from "styled-components";
import Topbar2 from "../components/Topbar2";
import TinderCard from "react-tinder-card";
import { useEffect, useState } from "react";
import card1 from "../assets/card1.png";
import { AnimatePresence, motion } from "framer-motion";
import good from "../assets/good.svg";
import bad from "../assets/bad.svg";
import arrow from "../assets/arrow.svg";
import { pageVariants } from "../animation/variants";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Swipe() {
  const [searchParams] = useSearchParams();
  const noti = searchParams.get("noti");
  const navigate = useNavigate();
  const [showTutorial, setShowTutorial] = useState(true);
  const [count, setCount] = useState(0);
  const cards = [
    { name: "제니쿠키", type: "음식", img: card1 },
    { name: "제니쿠키", type: "음식", img: card1 },
    { name: "제니쿠키", type: "음식", img: card1 },
    { name: "제니쿠키", type: "음식", img: card1 },
    { name: "제니쿠키", type: "음식", img: card1 },
  ];
  const onSwipe = (direction) => {
    if (direction === "right") {
    } else {
    }
    setCount(count + 1);
  };

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
  height: 435px;
  object-fit: cover;
`;
const CardBottom = styled.div`
  width: 286px;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
`;
const CardType = styled.div`
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 4px;
  background: var(--brand-500, #397153);
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
  cursor: pointer;
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
