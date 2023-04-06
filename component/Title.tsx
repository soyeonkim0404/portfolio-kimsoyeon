import React from "react";
import styled from "styled-components";

type Props = {
  children: string;
};

const Title: React.FC<Props> = ({ children }) => {
  return <TitleStyled>{children}</TitleStyled>;
};

const TitleStyled = styled.h2`
  font-size: 3rem;
  font-weight: 500;
`;

export default Title;
