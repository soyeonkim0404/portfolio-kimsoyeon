import React from "react";
import styled from "styled-components";

type Props = {
  children: any;
  col: string;
};

const List: React.FC<Props> = ({ children, col }) => {
  return <ListStyled className={`col-${col}`}>{children}</ListStyled>;
};

const ListStyled = styled.ul`
  display: flex;
  width: 100%;
  margin-top: 100px;
  &.col-3 {
    gap: 25px;
    li {
      flex: 0 0 33%;
      width: 33%;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        font-size: 3rem;
        font-weight: 300;
        text-align: center;
        color: #fff;
      }
    }
  }
`;

export default List;
