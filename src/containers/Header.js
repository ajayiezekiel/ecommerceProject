import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import DeckIcon from '@material-ui/icons/Deck';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch, useSelector } from 'react-redux';

import { setProducts } from '../redux/actions/ProductActions';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  deckButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    padding: 4,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    bottom: 0.1,
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    [theme.breakpoints.down('xs')]: {
      width: 145,
    },
  },
  clear: {
    backgroundColor: '#f52300',
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: '#c21c00',
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '25ch',
      '&:focus': {
        width: '28ch',
      },
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);
  const [localCopy, setLocalCopy] = useState([]);
  const [formValue, setFormValue] = useState('');
  const [show, setShow] = useState(false);

  const searchProducts = (text) => {
    setLocalCopy(products);
    const lowercasedFilter = text.toLowerCase();
    const filteredData = localCopy.filter((item) =>
      Object.keys(item).some(
        (key) => typeof item[key] === 'string' && item[key].toLowerCase().includes(lowercasedFilter)
      )
    );
    dispatch(setProducts(filteredData));
  };
  const clearProducts = () => {
    dispatch(setProducts(localCopy));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            component={NavLink}
            to="/"
            edge="start"
            className={classes.deckButton}
            color="inherit"
            aria-label="open drawer"
          >
            <DeckIcon />
          </IconButton>
          <Typography className={classes.title} variant="h4" noWrap>
            Buyrite Store
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
            {show ? (
              <Button
                variant="contained"
                className={classes.clear}
                onClick={() => {
                  setFormValue('');
                  clearProducts();
                  setShow(false);
                }}
              >
                Clear
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                onClick={() => {
                  searchProducts(formValue);
                  setShow(true);
                }}
              >
                Search
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
