import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import styled from "styled-components";
import Swipe from "./pages/Swipe";
import { Layout } from "./Layout";
import Chat from "./pages/Chat";
import { AnimatePresence } from "framer-motion";
import Product from "./pages/Product";
import Taste from "./pages/Taste";
import More from "./pages/More";
import Send from "./pages/Send";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Bg>
        <Container>
          <Routes key={location.pathname}>
            <Route path="/" element={<Layout />}>
              <Route
                path="/"
                element={
                  <Container>
                    <Home />
                  </Container>
                }
              />
              <Route
                path="/taste"
                element={
                  <Container>
                    <Taste />
                  </Container>
                }
              />
              <Route
                path="/send"
                element={
                  <Container>
                    <Send />
                  </Container>
                }
              />
              <Route
                path="/more"
                element={
                  <Container>
                    <More />
                  </Container>
                }
              />
            </Route>
            <Route
              path="/swipe"
              element={
                <Container>
                  <Swipe />
                </Container>
              }
            />
            <Route
              path="/chat"
              element={
                <Container>
                  <Chat />
                </Container>
              }
            />
            <Route
              path="/product"
              element={
                <Container>
                  <Product />
                </Container>
              }
            />
          </Routes>
        </Container>
      </Bg>
    </AnimatePresence>
  );
}

export default App;
const Bg = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1b1d1f;
`;
const Container = styled.div`
  width: 100%;
  max-width: 420px;
  height: 100vh;
  background: var(--cg-50, #f7f8f9);
  display: flex;
  flex: 1;
`;
