import React, { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import Product from '../Product';
import { setProducts } from '../../../redux/actions/ProductActions';

import useStyles from './ProductList.styles';
import Sidebar from '../sidebar/Sidebar';

const ProductList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [category, setCategory] = useState('');

  const handleChange = (data) => {
    setCategory(data);
  };

  useEffect(() => {
    if (
      category === 'electronics' ||
      category === 'jewelery' ||
      category === 'men clothing' ||
      category === 'women clothing'
    ) {
      const fetchProducts = async () => {
        const response = await axios
          .get(`https://fakestoreapi.com/products/category/${category}`)
          .catch((err) => console.log('Error', err));
        dispatch(setProducts(response.data));
      };
      fetchProducts();
    } else {
      const fetchProducts = async () => {
        const response = await axios
          .get('https://fakestoreapi.com/products?limit=18')
          .catch((err) => console.log('Error', err));
        dispatch(setProducts(response.data));
      };
      fetchProducts();
    }
  }, [dispatch, category]);

  return (
    <Grid container>
      <Grid item xs={12} sm={3} lg={2}>
        <Sidebar handleChange={handleChange} />
      </Grid>
      <Grid item xs={12} sm={9} lg={10}>
        <div className={classes.root}>
          <Product />
        </div>
      </Grid>
    </Grid>
  );
};

export default ProductList;
