import { createTheme } from '@mui/material/styles';;

const Theme = createTheme({
  palette: {
    primary: {
      main: '#FAF3E3', // white bone
    },
    white: {
        main: '#FAF6F0'
    },
    background: {
      default: '#1a1a1a', // Gris oscuro casi negro
    },
  },
  typography: {
    fontWeightBold: 700, // Agrega esta línea para definir fontWeightBold
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#000', // Negro
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: '#E7AB79', // Naranja al hacer hover
          },
        },
      },
    },
  },
});

export default Theme;
