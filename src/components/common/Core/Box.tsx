import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { cx } from "../system/core";
import { forwardRef } from "../system/forward-ref";
import { EXCEPT_STYLES, STYLES } from "../system/constant";
import { STYLES_TYPE } from "../system/system.types";

export interface BoxProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    STYLES_TYPE {
  className?: string;
  center?: boolean;
  style?: any;
  onClick?: () => void;
}

export const Box = forwardRef<BoxProps, "div">((props, ref) => {
  const {
    className = "",
    children,
    style,
    onClick,
    ...rest
  } = props as BoxProps;

  const initStyle = useCallback((rest) => {
    const styled = {};

    Object.keys(rest).forEach(
      (item) =>
        (styled[STYLES[item]] =
          rest[item] +
          (!isNaN(Number(rest[item])) && !EXCEPT_STYLES.includes(item)
            ? "px"
            : ""))
    );

    return styled;
  }, []);

  return (
    <Wrap
      ref={ref}
      className={cx(className)}
      style={{ ...style }}
      __css={initStyle({ ...rest })}
      onClick={onClick}
    >
      {children}
    </Wrap>
  );
});

export const Wrap: any = styled.div`
  ${(props: any) => props.__css}
`;
