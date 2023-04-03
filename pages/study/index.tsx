import React from "react";
import Contents from "@/component/Contents";
import styled from "styled-components";
import Link from "next/link";

const Index = () => {
  return (
    <Contents>
      <List>
        <li>
          <Link
            href={`/study/fireworks`}
          >
            fireworks
          </Link>
        </li>
      </List>
    </Contents>
  );
};

const List = styled.ul`
  li {
    a {
      color: red;
      text-decoration: none;
    }
  }
`;

export default Index;
