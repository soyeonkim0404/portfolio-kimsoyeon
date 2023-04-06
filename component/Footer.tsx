import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <Foot>Copyright Kim So Yeon. All rights reserved.</Foot>;
};

const Foot = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 35px;
  color: rgba(255, 255, 255, 0.4);
  font-size: 10px;
`;

export default Footer;
