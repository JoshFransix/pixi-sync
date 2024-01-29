import { createTheme, responsiveFontSizes } from '@mui/material/styles';

export default function GlobalStyleOverrides() {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1749FE',
      },
      secondary: {
        main: '#00237b',
      },
    },
    typography: {
      fontFamily: ['Work Sans', 'Arial', 'sans-serif'].join(','),
      body1: {
        fontFamily: "'Work Sans', Arial, sans-serif",
      },
      button: {
        textTransform: 'none',
        borderRadius: '7px',
      },
    },
    components: {},
  });

  return responsiveFontSizes(theme);
}
