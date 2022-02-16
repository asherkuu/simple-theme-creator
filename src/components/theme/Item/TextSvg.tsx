import React from "react";

const TextSvg = () => {
  return (
    <svg height="30" width="200">
      <text x="10" y="25">
        <tspan fill="red" fontWeight="bold">
          const
        </tspan>
        <tspan>&nbsp;</tspan>
        <tspan>foo</tspan>
      </text>
    </svg>
  );
};

export default TextSvg;
