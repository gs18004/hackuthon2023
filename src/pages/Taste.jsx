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
import object1 from "../assets/object1.png";
import object2 from "../assets/object2.png";
import object3 from "../assets/object3.png";
import object4 from "../assets/object4.png";
import object5 from "../assets/object5.png";
import object6 from "../assets/object6.png";
import object7 from "../assets/object7.png";
import object8 from "../assets/object8.png";
import object9 from "../assets/object9.png";
import object10 from "../assets/object10.png";
import object11 from "../assets/object11.png";
import object12 from "../assets/object12.png";
import food1 from "../assets/food1.png";
import food2 from "../assets/food2.png";
import food3 from "../assets/food3.png";
import food4 from "../assets/food4.png";
import food5 from "../assets/food5.png";
import food6 from "../assets/food6.png";
import food7 from "../assets/food7.png";
import food8 from "../assets/food8.png";
import food9 from "../assets/food9.png";
import food10 from "../assets/food10.png";
import food11 from "../assets/food11.png";
import food12 from "../assets/food12.png";

import check from "../assets/check.svg";
import toast, { Toaster } from "react-hot-toast";
function Taste() {
  const [selected, setSelected] = useState(0);
  const ref0 = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const [left, setLeft] = useState(60);
  const [editMode, setEditMode] = useState(false);
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
    { index: 0, name: "요리", img: book1 },
    { index: 1, name: "예술", img: book2 },
    { index: 2, name: "역사", img: book3 },
    { index: 3, name: "부동산", img: book4 },
    { index: 4, name: "비즈니스", img: book5 },
    { index: 5, name: "철학", img: book6 },
    { index: 6, name: "에세이", img: book7 },
    { index: 7, name: "자기계발", img: book8 },
    { index: 8, name: "소설", img: book9 },
    { index: 9, name: "시집", img: book10 },
    { index: 10, name: "투자", img: book11 },
    { index: 11, name: "IT", img: book12 },
  ];
  const [selectedBooks, setSelectedBooks] = useState([
    { index: 0, name: "요리", img: book1 },
    { index: 2, name: "역사", img: book3 },
    { index: 5, name: "철학", img: book6 },
    { index: 10, name: "투자", img: book11 },
    { index: 11, name: "IT", img: book12 },
  ]);
  useEffect(() => {
    setLeft(ref[selected].current.offsetLeft);
  }, [selected]);
  useEffect(() => {
    const selectedBooksData = localStorage.getItem("books");
    if (!selectedBooksData)
      localStorage.setItem(
        "books",
        JSON.stringify([
          { index: 0, name: "요리", img: book1 },
          { index: 2, name: "역사", img: book3 },
          { index: 5, name: "철학", img: book6 },
          { index: 10, name: "투자", img: book11 },
          { index: 11, name: "IT", img: book12 },
        ])
      );
    else {
      setSelectedBooks(JSON.parse(selectedBooksData));
    }
  }, []);

  const objects = [
    { index: 0, name: "주방 용품", img: object1 },
    { index: 1, name: "수납", img: object2 },
    { index: 2, name: "전등", img: object3 },
    { index: 3, name: "로코코", img: object4 },
    { index: 4, name: "트렌디", img: object5 },
    { index: 5, name: "심플", img: object6 },
    { index: 6, name: "패브릭", img: object7 },
    { index: 7, name: "우드", img: object8 },
    { index: 8, name: "침실", img: object9 },
    { index: 9, name: "캐릭터", img: object10 },
    { index: 10, name: "일러스트", img: object11 },
    { index: 11, name: "인형", img: object12 },
  ];
  const [selectedObjects, setSelectedObjects] = useState([
    { index: 1, name: "수납", img: object2 },
    { index: 2, name: "전등", img: object3 },
  ]);
  useEffect(() => {
    const selectedObjectsData = localStorage.getItem("objects");
    if (!selectedObjectsData)
      localStorage.setItem(
        "objects",
        JSON.stringify([
          { index: 1, name: "수납", img: object2 },
          { index: 2, name: "전등", img: object3 },
        ])
      );
    else {
      setSelectedObjects(JSON.parse(selectedObjectsData));
    }
  }, []);

  const foods = [
    { index: 0, name: "구움과자", img: food1 },
    { index: 1, name: "봉지과자", img: food2 },
    { index: 2, name: "건어물", img: food3 },
    { index: 3, name: "초콜릿", img: food4 },
    { index: 4, name: "젤리", img: food5 },
    { index: 5, name: "냉동식품", img: food6 },
    { index: 6, name: "밀키트", img: food7 },
    { index: 7, name: "음료", img: food8 },
    { index: 8, name: "육류", img: food9 },
    { index: 9, name: "야채", img: food10 },
    { index: 10, name: "과일", img: food11 },
    { index: 11, name: "유제품", img: food12 },
  ];
  const [selectedFoods, setSelectedFoods] = useState([
    { index: 4, name: "젤리", img: food5 },
    { index: 5, name: "냉동식품", img: food6 },
    { index: 10, name: "과일", img: food11 },
  ]);
  useEffect(() => {
    const selectedFoodsData = localStorage.getItem("foods");
    if (!selectedFoodsData)
      localStorage.setItem(
        "foods",
        JSON.stringify([
          { index: 4, name: "젤리", img: food5 },
          { index: 5, name: "냉동식품", img: food6 },
          { index: 10, name: "과일", img: food11 },
        ])
      );
    else {
      setSelectedFoods(JSON.parse(selectedFoodsData));
    }
  }, []);

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
        <CreditBox
          onClick={() => {
            setEditMode(!editMode);
          }}
        >
          <CreditImg src={settings} />
          <CreditText>{editMode ? "완료" : "편집"}</CreditText>
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
                ? editMode
                  ? books.map((book, idx) => (
                      <Column
                        initial="hidden"
                        animate="visible"
                        variants={variant(idx)}
                      >
                        {selectedBooks.filter((el) => el.name === book.name)
                          .length > 0 ? (
                          <Check
                            src={check}
                            onClick={() => {
                              if (selectedBooks.length === 1) {
                                toast.error(
                                  "최소 1개의 관심 주제를 선택해주세요.",
                                  { id: "1" }
                                );
                              } else {
                                const newSelectedBooks = [
                                  ...selectedBooks,
                                ].filter((el) => el.name !== book.name);
                                setSelectedBooks((prev) =>
                                  [...prev].filter(
                                    (el) => el.name !== book.name
                                  )
                                );
                                localStorage.setItem(
                                  "books",
                                  JSON.stringify(newSelectedBooks)
                                );
                              }
                            }}
                          />
                        ) : null}
                        <Img
                          src={book.img}
                          onClick={() => {
                            const newSelectedBooks = [
                              ...selectedBooks,
                              book,
                            ].sort(function (x, y) {
                              return x.index - y.index;
                            });
                            setSelectedBooks((prev) =>
                              [...prev, book].sort(function (x, y) {
                                return x.index - y.index;
                              })
                            );
                            localStorage.setItem(
                              "books",
                              JSON.stringify(newSelectedBooks)
                            );
                          }}
                        />
                        <Name>{book.name}</Name>
                      </Column>
                    ))
                  : selectedBooks.map((book, idx) => (
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
              {selected === 1
                ? editMode
                  ? objects.map((object, idx) => (
                      <Column
                        initial="hidden"
                        animate="visible"
                        variants={variant(idx)}
                      >
                        {selectedObjects.filter((el) => el.name === object.name)
                          .length > 0 ? (
                          <Check
                            src={check}
                            onClick={() => {
                              if (selectedObjects.length === 1) {
                                toast.error(
                                  "최소 1개의 관심 주제를 선택해주세요.",
                                  { id: "1" }
                                );
                              } else {
                                const newSelectedObjects = [
                                  ...selectedObjects,
                                ].filter((el) => el.name !== object.name);
                                setSelectedObjects((prev) =>
                                  [...prev].filter(
                                    (el) => el.name !== object.name
                                  )
                                );
                                localStorage.setItem(
                                  "objects",
                                  JSON.stringify(newSelectedObjects)
                                );
                              }
                            }}
                          />
                        ) : null}
                        <Img
                          src={object.img}
                          onClick={() => {
                            const newSelectedObjects = [
                              ...selectedObjects,
                              object,
                            ].sort(function (x, y) {
                              return x.index - y.index;
                            });
                            setSelectedObjects((prev) =>
                              [...prev, object].sort(function (x, y) {
                                return x.index - y.index;
                              })
                            );
                            localStorage.setItem(
                              "objects",
                              JSON.stringify(newSelectedObjects)
                            );
                          }}
                        />
                        <Name>{object.name}</Name>
                      </Column>
                    ))
                  : selectedObjects.map((object, idx) => (
                      <Column
                        initial="hidden"
                        animate="visible"
                        variants={variant(idx)}
                      >
                        <Img src={object.img} />
                        <Name>{object.name}</Name>
                      </Column>
                    ))
                : null}

              {selected === 2
                ? editMode
                  ? foods.map((food, idx) => (
                      <Column
                        initial="hidden"
                        animate="visible"
                        variants={variant(idx)}
                      >
                        {selectedFoods.filter((el) => el.name === food.name)
                          .length > 0 ? (
                          <Check
                            src={check}
                            onClick={() => {
                              if (selectedFoods.length === 1) {
                                toast.error(
                                  "최소 1개의 관심 주제를 선택해주세요.",
                                  { id: "1" }
                                );
                              } else {
                                const newSelectedFoods = [
                                  ...selectedFoods,
                                ].filter((el) => el.name !== food.name);
                                setSelectedFoods((prev) =>
                                  [...prev].filter(
                                    (el) => el.name !== food.name
                                  )
                                );
                                localStorage.setItem(
                                  "foods",
                                  JSON.stringify(newSelectedFoods)
                                );
                              }
                            }}
                          />
                        ) : null}
                        <Img
                          src={food.img}
                          onClick={() => {
                            const newSelectedFoods = [
                              ...selectedFoods,
                              food,
                            ].sort(function (x, y) {
                              return x.index - y.index;
                            });
                            setSelectedFoods((prev) =>
                              [...prev, food].sort(function (x, y) {
                                return x.index - y.index;
                              })
                            );
                            localStorage.setItem(
                              "foods",
                              JSON.stringify(newSelectedFoods)
                            );
                          }}
                        />
                        <Name>{food.name}</Name>
                      </Column>
                    ))
                  : selectedFoods.map((food, idx) => (
                      <Column
                        initial="hidden"
                        animate="visible"
                        variants={variant(idx)}
                      >
                        <Img src={food.img} />
                        <Name>{food.name}</Name>
                      </Column>
                    ))
                : null}
            </AnimatePresence>
          </Grid>
        </GridWrapper>
      </SelectRowWrapper>
      <Toaster />
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
const Check = styled.img`
  width: 95px;
  height: 95px;
  z-index: 10;
  margin-bottom: -99px;
  opacity: 0.9;
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
const PleaseEdit = styled.p`
  width: 100%;
  color: #000;
  text-align: center;

  /* Kor/M/15 */
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  margin-top: 150px;
`;
