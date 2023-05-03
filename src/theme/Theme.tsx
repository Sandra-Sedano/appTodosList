import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

type ThemeProps ={
    children:React.ReactNode
}

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function Theme({children}:ThemeProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

