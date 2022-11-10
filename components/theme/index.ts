import {ThemeProps} from 'styled-components';

export const theme = {
  borderRadii: {
    sm: 6,
    md: 8,
    lg: 10,
  },
  padding: {
    tiny: 4,
    small: 8,
    small2: 12,
    medium: 16,
    big: 24,
    large: 32,
  },
  margin: {
    tiny: 4,
    small: 8,
    small2: 12,
    medium: 16,
    big: 24,
    large: 32,
  },
  lineHeight: {
    h1: 31,
    h2: 25,
    body: 22,
    small: 20,
    tiny: 17,
  },
  fontSizes: {
    h1: 24,
    h2: 18,
    body: 16,
    small: 14,
    tiny: 12,
  },
  fontTypes: {
    h1: 'DMSans-Bold',
    body: 'DMSans-Regular',
    small: 'DMSans-Medium',
  },
  palette: {
    white: '#ffffff',
    error: '#DD2C2C',
    error100: '#FCEAEA',
    success: '#37BB30',
    primary: {
      blue: '#3641FC',
      blue100: '#EBECFF',
      blue200: '#C3C6FE',
      blue300: '#AFB3FE',
      blue400: '#868DFD',
      blue500: '#1B217E',
      blue600: '#161A65',
      blue700: '#10134C',
      blue800: '#0B0D32',
      blue900: '#0E0E2C',
    },
    
    tertiary: {
   grey:'#333377'
    },
  },
};

export type themeProvider = ThemeProps<typeof theme>;

type ThemeType = typeof theme;
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
