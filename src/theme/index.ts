import { createTheme } from '@mui/material';
import { ColorPartial } from '@mui/material/styles/createPalette';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9BA3EB',
    },
    secondary: {
      main: '#646FD4',
    },
    background: { default: '#DBDFFD' },
  },
});

declare module '@mui/material/styles' {
  //   interface Palette {
  //     blueGrey?: ColorPartial;
  //   }
  interface PaletteOptions {
    blueGrey?: ColorPartial;
  }
}

// export type CustomizedTheme = typeof theme;

// declare module '@emotion/react' {
//   // eslint-disable-next-line @typescript-eslint/no-empty-interface
//   export interface Theme extends CustomizedTheme {}
// }

export default theme;
