import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import styled from "styled-components";
import { motion } from "framer-motion";

export function Layout() {
  return (
    <Container>
      <Topbar />
      <Outlet />
      <Navbar />
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;
