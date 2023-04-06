import React from "react";
import Link from "next/link";
import styled from "styled-components";
import Title from "@/component/Title";
import { FiArrowLeft } from "react-icons/fi";

type Props = {
  title: string;
};

const SubHeader: React.FC<Props> = ({ title }) => {
  return (
    <SubNav>
      <Title>{title}</Title>
      <HomeBtn>
        <Link href={`/`}>
          <FiArrowLeft />
          Home
        </Link>
      </HomeBtn>
    </SubNav>
  );
};

const SubNav = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
`;

const HomeBtn = styled.span`
  position: absolute;
  top: 20px;
  left: 0;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    color: #fff;
    svg {
      margin-right: 5px;
    }
  }
`;

export default SubHeader;
