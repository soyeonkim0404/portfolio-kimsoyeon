import React from "react";
import styled from "styled-components";
import { MIXINS } from "@/styles/theme";

type Props = {
  children: any;
  type: string;
};

const Contents: React.FC<Props> = ({ children, type }) => {
  return <Content className={`${type}`}>{children}</Content>;
};

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 35px);
  padding: 20px 20px;
  ${MIXINS.flexBox()}
  box-sizing:border-box;
  &.list {
    ${MIXINS.flexBox("column", "center", "flex-start")}
  }
`;

export default Contents;
