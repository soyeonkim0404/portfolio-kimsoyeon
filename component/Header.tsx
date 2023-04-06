import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <Nav>
      <Link href={`/`}>HOME</Link>
      <Link href={`/study`}>STUDY</Link>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  a {
    color: #fff;
    text-decoration: none;
    & + a {
      position: relative;
      margin-left: 20px;
      padding-left: 20px;
      &::before {
        content: "";
        display: block;
        position: absolute;
        top: 2px;
        left: 0;
        width: 1px;
        height: 12px;
        background: rgba(255, 255, 255, 0.5);
      }
    }
  }
`;

export default Header;
