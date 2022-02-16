import React from "react";
import Item from "components/theme/Item";
import { Wrap } from "./styled";

const Index = () => {
  return (
    <Wrap>
      <div className="grid">
        <Item sec={0} />
        <Item sec={30} />
        <Item sec={60} />
        <Item sec={90} />
        <Item sec={120} />
        <Item sec={140} />
        <Item sec={160} />
        <Item sec={180} />
        <Item sec={180} />
        <Item sec={180} />
        <Item sec={180} />
        <Item sec={180} />
        <Item sec={180} />
        <Item sec={180} />
        <Item sec={180} />
      </div>
    </Wrap>
  );
};

export default Index;
