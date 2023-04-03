import React from "react";
import styled from "styled-components";
import { MIXINS } from "@/styles/theme";

const Contents = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<
        any,
        | string
        | React.JSXElementConstructor<any>
      >
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <Content>{props.children}</Content>
  );
};

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 35px - 60px);
  ${MIXINS.flexBox()}
`;

export default Contents;
