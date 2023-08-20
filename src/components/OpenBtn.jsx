import React, { useState } from "react";
import styled from "styled-components";

function OpenBtn({ onClick }) {
  return <Btn onClick={onClick}>소포 열기</Btn>;
}

export default OpenBtn;
const Btn = styled.div`
  cursor: pointer;
  display: flex;
  width: 138px;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background: var(--brand-500, #397153);
  color: var(--cg-50, #f7f8f9);
  margin-top: 24px;
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
