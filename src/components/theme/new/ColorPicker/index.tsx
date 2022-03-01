import { Box } from "components/common/Core";
import React from "react";
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";

const Index = () => {
  const [color, setColor] = useColor("hex", "#121212");
  return (
    <Box dp="flex" ai="center" h="100%">
      <ColorPicker
        width={250}
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
