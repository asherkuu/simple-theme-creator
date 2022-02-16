import { Box } from "components/common/Core";
import ColorPicker from "components/theme/new/ColorPicker";
import VsCode from "components/theme/new/VsCode";
import React from "react";

const NewTheme = () => {
  return (
    <Box dp="flex" fd="row" fx="1" pd="20" g="20" fw="wrap">
      <VsCode />
      <ColorPicker />
    </Box>
  );
};

export default NewTheme;
