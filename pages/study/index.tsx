import React from "react";
import Contents from "@/component/Contents";
import Link from "next/link";
import List from "@/component/List";
import { studyLink } from "@/data/pageLink";
import SubHeader from "@/component/SubHeader";

const Index = () => {
  return (
    <Contents type="list">
      <SubHeader title="STUDY" />
      <List col="3">
        {studyLink.map(item => (
          <li key={item.id}>
            <Link href={item.path}>
              {item.id}.
              <br />
              {item.title}
            </Link>
          </li>
        ))}
      </List>
    </Contents>
  );
};

export default Index;
