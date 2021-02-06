// Global Styles for your Application
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => {
  return {
    '@global': {
      html: {
        'font-family': 'sans-serif',
        'font-size': '16px'
      },
      // Default Anchors
      a: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': { textDecoration: 'underline' },
        fontWeight: 400
      }
    }
  };
});

export default function GlobalStyles() {
  useStyles();
  return null;
}
