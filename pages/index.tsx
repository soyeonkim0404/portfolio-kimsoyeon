import React from "react";
import styled from "styled-components";
import { MIXINS } from "@/styles/theme";

const Home: React.FC = () => {
  return <Main>Kim So Yeon</Main>;
};

const Main = styled.div`
  width: 100%;
  height: 100vh;
  ${MIXINS.flexBox()}
  font-size: 3rem;
`;

export default Home;
