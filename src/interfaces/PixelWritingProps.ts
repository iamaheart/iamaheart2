export type PixelWritingProps = {
  str: string;
  fontProps?: PixelFontProps;
};

export type PixelContainerProps = {
  elements: string[];
  ElementComponent: React.FC<PixelWritingProps>;
  fontProps?: PixelFontProps;
  gapMultiplier: number;
  containerClass: string;
};

export type PixelFontProps = {
  size?: number;
  color?: string;
};

export type PixelFontDefaultProps = {
  size: number;
  color: string;
};
