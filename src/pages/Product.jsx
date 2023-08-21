import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { pageVariants } from "../animation/variants";
import { motion } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import Topbar2 from "../components/Topbar2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import book from "../assets/book.png";
import good from "../assets/good.svg";
import bad from "../assets/bad.svg";
import share from "../assets/share.svg";
import mirror from "../assets/mirror.png";
import chicken from "../assets/chicken.png";
import holder from "../assets/holder.png";
import { toBlob } from "html-to-image";
import toast from "react-hot-toast";
export default function Product() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const month = searchParams.get("month");
  const swipable = searchParams.get("swipable");
  const [isBad, setIsBad] = useState([null, null, null, null]);
  const [isGood, setIsGood] = useState([null, null, null, null]);
  const imageRef1 = useRef(null);
  const imageRef2 = useRef(null);
  const imageRef3 = useRef(null);
  const imageRef4 = useRef(null);
  const imageRefs = [imageRef1, imageRef2, imageRef3, imageRef4];
  const cards = [
    {
      name: "비정형 전신 거울",
      type: "오브제",
      subtitle: "베노식스",
      date: "2023. 08. 04",
      img: mirror,
    },
    {
      name: "닭가슴살 꾸이칩 시그니처",
      type: "푸드",
      subtitle: "아임닭",
      date: "2023. 08. 13",
      img: chicken,
    },
    {
      name: "메리골드 마음 세탁소",
      type: "도서",
      subtitle: "북로망스",
      date: "2023. 08. 21",
      img: book,
    },
    {
      name: "BAE 인센스 홀더",
      type: "도서",
      subtitle: "SAGAYO",
      date: "2023. 08. 31",
      img: holder,
    },
  ];
  const settings = {
    centerMode: true,
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "60px",
  };

  const shareHandler = async (name, idx) => {
    if (navigator.share) {
      try {
        const file = await toBlob(imageRefs[idx].current);
        await navigator.share({
          files: [
            new File([file], name + ".png", {
              type: file.type,
            }),
          ],
        });
      } catch (e) {
        toast.error(e);
      }
    } else {
      toast.error("공유하기 기능이 지원되지 않는 기기입니다.");
    }
  };
  return (
    <Container
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <Topbar2
        title="받은 소포 정보"
        onBackClick={() => {
          navigate(`/chat?swipable=${swipable}&noti=false`);
        }}
      />
      <TopDate>{`2023년 ${month}월`}</TopDate>
      <CustomSlider {...settings}>
        {cards.map((card, idx) => (
          <SlideWrapper>
            <Slide>
              <CardTop>
                <Row>
                  <Type>{card.type}</Type>
                  <Share
                    src={share}
                    onClick={() => {
                      shareHandler(card.name, idx);
                    }}
                  />
                </Row>
                <Subtitle>{card.subtitle}</Subtitle>
                <Name>{card.name}</Name>
                <Row2>
                  <DateLeft>수령일</DateLeft>
                  <Date>{card.date}</Date>
                </Row2>
              </CardTop>
              <ImgWrapper>
                <Img src={card.img} ref={imageRefs[idx]} />
                <Gradient>
                  <Column
                    style={{ marginLeft: "17.5px" }}
                    opacity={isBad[idx] ? 1 : isGood[idx] ? 0.2 : 0.7}
                  >
                    <Circle
                      onClick={() => {
                        setIsBad((prev) => {
                          const newIsBad = [...prev];
                          newIsBad[idx] = true;
                          return newIsBad;
                        });
                        setIsGood((prev) => {
                          const newIsGood = [...prev];
                          newIsGood[idx] = false;
                          return newIsGood;
                        });
                      }}
                    >
                      <Icon src={bad} />
                    </Circle>
                    <EvalText>별로예요</EvalText>
                  </Column>
                  <Column
                    style={{ marginRight: "17.5px" }}
                    opacity={isGood[idx] ? 1 : isBad[idx] ? 0.2 : 0.7}
                  >
                    <Circle
                      onClick={() => {
                        setIsBad((prev) => {
                          const newIsBad = [...prev];
                          newIsBad[idx] = false;
                          return newIsBad;
                        });
                        setIsGood((prev) => {
                          const newIsGood = [...prev];
                          newIsGood[idx] = true;
                          return newIsGood;
                        });
                      }}
                    >
                      <Icon src={good} />
                    </Circle>
                    <EvalText>좋아요</EvalText>
                  </Column>
                </Gradient>
              </ImgWrapper>
            </Slide>
          </SlideWrapper>
        ))}
      </CustomSlider>
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
const TopDate = styled.div`
  position: fixed;
  top: 84px;
  display: flex;
  padding: 7px 15px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: var(--cg-400, #9ea4aa);
  color: var(--cg-50, #f7f8f9);

  /* Kor/M/15 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
`;
const CustomSlider = styled(Slider)`
  max-width: 420px;
  width: 100vw;
  height: 100vh;
`;
const SlideWrapper = styled.div`
  padding: 80px 8px;
`;
const Slide = styled.div`
  display: flex;
  width: 260px;
  height: 428px;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 10px;
  background: var(--cg-00, #fff);

  /* Shadow/Up */
  box-shadow: 0px -8px 60px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;
const CardTop = styled.div`
  width: 260px;
  height: 138px;
  background: #fff;
`;
const Row = styled.div`
  margin: 0px 16px;
  margin-top: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;
const Share = styled.img`
  cursor: pointer;
  width: 32px;
  height: 32px;
`;
const ImgWrapper = styled.div`
  position: relative;
`;
const Img = styled.img`
  position: absolute;
  width: 260px;
  height: 290px;
  object-fit: cover;
`;
const Gradient = styled.div`
  position: absolute;
  width: 260px;
  height: 290px;
  background: linear-gradient(
    360deg,
    rgba(0, 0, 0, 0.59) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 10;
  display: flex;
  justify-content: space-between;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-end;
  justify-content: flex-end;
  gap: 5px;
  margin-bottom: 19px;
  opacity: ${(props) => props.opacity};
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
  &:active {
    scale: 0.95;
  }
`;
const EvalText = styled.p`
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
const Type = styled.div`
  width: fit-content;
  display: flex;
  padding: 4px 10px;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: var(--cg-600, #454c53);
  color: var(--cg-50, #f7f8f9);

  /* Kor/M/13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
`;
const Subtitle = styled.p`
  color: #000;

  /* Kor/M/13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 19.5px */
  margin-top: 8px;
  margin-left: 16px;
`;
const Name = styled.p`
  color: #000;

  /* Kor/B/17 */
  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 25.5px */
  margin-left: 16px;
`;
const Row2 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 4px;
  margin-left: 16px;
`;
const DateLeft = styled.p`
  color: var(--cg-400, #9ea4aa);
  text-align: center;

  /* Kor/B/13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 19.5px */
`;
const Date = styled.p`
  color: var(--cg-500, #72787f);
  text-align: center;

  /* Kor/R/13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 19.5px */
`;
