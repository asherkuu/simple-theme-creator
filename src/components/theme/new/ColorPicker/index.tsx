import { Box } from "components/common/Core";
import dynamic from "next/dynamic";
import React from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import { SelectTextColor } from "./styled";

const Index = () => {
  const [color, setColor] = useColor("hex", "#121212");
  return (
    <Box dp="flex" fd="column" ai="center" g="20px" h="100%">
      <SelectTextColor>workbench_backround</SelectTextColor>
      <ColorPicker
        width={230}
        height={200}
        color={color}
        onChange={setColor}
        onChangeComplete={(color): void =>
          console.log(`Final color: ${color.hex}!`)
        }
        hideHSV
        alpha
        dark
      />
    </Box>
  );
};

export default Index;
