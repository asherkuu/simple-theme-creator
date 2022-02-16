import React from "react";
import { Box } from "../Core";

const Index = () => {
  return (
    <Box w="100%" ps="fixed" t="0" l="0">
      <Box dp="flex" jc="space-between" p="25px 20px">
        <div>
          <span>VS-theme Creator</span>
        </div>
        <Box dp="flex" g="10">
          <span>ALL</span>
          <span>DARK</span>
          <span>LIGHT</span>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
