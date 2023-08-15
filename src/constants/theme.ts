export const dark = {
  background: 'linear-gradient(135deg, #6F225F, #2F0E3C, #180B2C)',
  primary: '#C69F9B',
  secondary: '#F8F8F8',
  tertiary: '#180B2C',
  text: '#180B2C',
};

export const light = {
  background: 'linear-gradient(135deg, #F8F8F8, #C69F9B, #180B2C)',
  primary: '#6F225F',
  secondary: '#C69F9B',
  tertiary: '#180B2C',
  text: '#180B2C',
};

type Theme = {
  background: string;
  primary: string;
  secondary: string;
  tertiary: string;
  text: string;
};

export interface CustomThemeProps {
  theme?: Theme;
}
