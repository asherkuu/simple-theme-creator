export type As<Props = any> = React.ElementType<Props>;

/**
 * Extract the props of a React element or component
 */
export type PropsOf<T extends As> = React.ComponentPropsWithoutRef<T> & {
  as?: As;
};

export type OmitCommonProps<
  Target,
  OmitAdditionalProps extends keyof any = never
> = Omit<Target, "transition" | "as" | "color" | OmitAdditionalProps>;

export type RightJoinProps<
  SourceProps extends object = {},
  OverrideProps extends object = {}
> = OmitCommonProps<SourceProps, keyof OverrideProps> & OverrideProps;

export type MergeWithAs<
  ComponentProps extends object,
  AsProps extends object,
  AdditionalProps extends object = {},
  AsComponent extends As = As
> = RightJoinProps<ComponentProps, AdditionalProps> &
  RightJoinProps<AsProps, AdditionalProps> & {
    as?: AsComponent;
  };

export type ComponentWithAs<Component extends As, Props extends object = {}> = {
  <AsComponent extends As>(
    props: MergeWithAs<
      React.ComponentProps<Component>,
      React.ComponentProps<AsComponent>,
      Props,
      AsComponent
    >
  ): JSX.Element;

  displayName?: string;
  propTypes?: React.WeakValidationMap<any>;
  contextTypes?: React.ValidationMap<any>;
  defaultProps?: Partial<any>;
  id?: string;
};

export type STYLES_TYPE = {
  dp?: string;
  fx?: string;
  fd?: string;
  ai?: string;
  jc?: string;
  bd?: string;
  bdw?: string;
  bdc?: string;
  bdr?: string;
  t?: string;
  b?: string;
  r?: string;
  l?: string;
  m?: string;
  p?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
  w?: string;
  h?: string;
  mxw?: string;
  mxh?: string;
  mnw?: string;
  mnh?: string;
  ps?: string;
  g?: string;
  bg?: string;
  zi?: string;
};
