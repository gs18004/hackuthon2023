import { useState } from "react";
import styled from "styled-components";
import homeTrue from "../assets/home-true.png";
import homeFalse from "../assets/home-false.png";
import tasteTrue from "../assets/taste-true.png";
import tasteFalse from "../assets/taste-false.png";
import sendTrue from "../assets/send-true.png";
import sendFalse from "../assets/send-false.png";
import moreTrue from "../assets/more-true.png";
import moreFalse from "../assets/more-false.png";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { motion, useAnimationControls } from "framer-motion";
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const noti = searchParams.get("noti");
  const swipable = searchParams.get("swipable");
  const init = {
    "/": 0,
    "/taste": 1,
    "/more": 3,
  };
  const [selected, setSelected] = useState(init[location.pathname]);
  const variants = {
    initial: {
      opacity: 0,
    },
    start: {
      scaleX: [1, 1.13, 1],
      transition: {
        duration: 0.2,
      },
    },
  };
  const controls0 = useAnimationControls();
  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const controls3 = useAnimationControls();
  return (
    <Container>
      <Row>
        <Btn
          onClick={async () => {
            setSelected(0);
            await controls0.start("start");
            navigate(`/?swipable=${swipable}&noti=${noti}`);
          }}
          variants={variants}
          animate={controls0}
        >
          <Icon src={selected === 0 ? homeTrue : homeFalse} />
          {/* <BtnText selected={selected === 0 ? "true" : "false"}>home</BtnText> */}
        </Btn>
        <Btn
          onClick={async () => {
            setSelected(1);
            await controls1.start("start");
            navigate(`/taste?swipable=${swipable}&noti=${noti}`);
          }}
          variants={variants}
          animate={controls1}
        >
          <Icon src={selected === 1 ? tasteTrue : tasteFalse} />
          {/* <BtnText selected={selected === 1 ? "true" : "false"}>taste</BtnText> */}
        </Btn>
        <Btn
          onClick={async () => {
            // setSelected(2);
            await controls2.start("start");
            // navigate(`/send?swipable=${swipable}&noti=${noti}`);
          }}
          variants={variants}
          animate={controls2}
        >
          <Icon
            src={selected === 2 ? sendTrue : sendFalse}
            style={{ width: "36px", height: "36px" }}
          />
          {/* <BtnText selected={selected === 2 ? "true" : "false"}>more</BtnText> */}
        </Btn>
        <Btn
          onClick={async () => {
            setSelected(3);
            await controls3.start("start");
            navigate(`/more?swipable=${swipable}&noti=${noti}`);
          }}
          variants={variants}
          animate={controls3}
        >
          <Icon src={selected === 3 ? moreTrue : moreFalse} />
          {/* <BtnText selected={selected === 2 ? "true" : "false"}>more</BtnText> */}
        </Btn>
      </Row>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100vw;
  max-width: 420px;
  padding: 12px 35.67px 20px 35.67px;
  border-radius: 20px 20px 0px 0px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px -7px 50px 0px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Btn = styled(motion.div)`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0 15px;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
`;
// const BtnText = styled.p`
//   color: ${(props) => (props.selected === "true" ? "#72787f" : "#C9CDD2")};
//   /* Kor/B/13 */
//   font-family: Pretendard;
//   font-size: 13px;
//   font-style: normal;
//   font-weight: ${(props) => (props.selected === "true" ? "700" : "500")};
//   line-height: 150%; /* 19.5px */
// `;
