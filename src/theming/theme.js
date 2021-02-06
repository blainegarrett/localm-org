// Define Your Material-UI theme here - https://material-ui.com/customization/themes/

import green from '@material-ui/core/colors/green';

const muiTheme = {
  typography: {
    useNextVariants: true
  },
  palette: {
    type: 'dark',
    primary: {
      light: '#e1f3fc',
      main: '#039be5',
      dark: '#7bb8ff'
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700]
    }
  }
};

export default muiTheme;
