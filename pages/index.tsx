import React from "react";
import styled from "styled-components";
import { MIXINS } from "@/styles/theme";
import Header from "@/component/Header";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Main>Kim So Yeon</Main>
    </>
  );
};

const Main = styled.div`
  width: 100%;
  height: calc(100vh - 35px);
  ${MIXINS.flexBox()}
  font-size: 3rem;
  font-weight: 500;
`;

export default Home;
