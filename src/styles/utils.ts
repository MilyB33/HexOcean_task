type ThemeField = Record<string, string>;

interface Theme {
  [key: string]: ThemeField;
}

export const getColor =
  (colorName: string) =>
  ({ theme }: { theme: Theme }) =>
    theme.color[colorName];

export const getFontFamily =
  (fontName: string) =>
  ({ theme }: { theme: Theme }) =>
    theme.fontFamily[fontName];

export const getFontWeight =
  (fontWeightName: string) =>
  ({ theme }: { theme: Theme }) =>
    theme.fontWeight[fontWeightName];

export const getMedias =
  (mediasName: string) =>
  ({ theme }: { theme: Theme }) =>
    theme.medias[mediasName];

export const getShadow =
  (shadowName: string) =>
  ({ theme }: { theme: Theme }) =>
    theme.shadows[shadowName];

export const getAnimation =
  (animationName: string) =>
  ({ theme }: { theme: Theme }) =>
    theme.animations[animationName];
