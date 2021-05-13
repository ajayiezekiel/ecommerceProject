import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      margin: theme.spacing(2, 0.5),
    },
  },
  cardMedia: {
    backgroundSize: 'contain',
  },
  childflex: {
    flexGrow: 1,
    flexBasis: '0',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing(3, 0),
    padding: 5,
  },
  typo: {
    backgroundColor: '#f2f2f2',
    color: 'brown',
    padding: '5px 12px',
    margin: '10px 16px 10px 0px',
    borderRadius: '5px',
  },
  teal: {
    margin: theme.spacing(1.5, 0),
  },
  tealInner: {
    fontSize: '16px !important',
  },
  button: {
    backgroundColor: '#ff3e6c',
    border: '1px solid #ff3e6c',
    color: theme.palette.common.white,
    width: '200px',
    '&:hover': {
      backgroundColor: 'teal',
      border: '1px solid teal',
    },
  },
}));

const secondstyles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    margin: '5px',
  },
};

export { useStyles, secondstyles };
