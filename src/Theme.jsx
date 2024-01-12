import { createTheme } from '@mui/material/styles';;

const Theme = createTheme({
  typography: {
    dosis: {
      fontFamily: "'Dosis', sans-serif",
      fontWeightBold: 300
    },
    bebas: {
      fontFamily: "'Bebas Neue', sans-serif",
      fontWeightBold: 500
    },
    satisfy: {
      fontFamily: "'Satisfy', cursive",
      fontWeightBold: 500
    }
  },
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
    orange: {
      main: '#ff8103b2',
      principal: '#FF9F29'
    }
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
