import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(3, 1, 1),
  },
  subHeader: {
    fontSize: '1.5rem',
  },
  icon1: {
    color: '#264653',
  },
  icon2: {
    color: '#2a9d8f',
  },
  icon3: {
    color: '#e9c46a',
  },
  icon4: {
    color: '#f4a261',
  },
  icon5: {
    color: '#e76f51',
  },
  typo: {
    fontSize: '1.5rem',
  },
}));

export default useStyles;
