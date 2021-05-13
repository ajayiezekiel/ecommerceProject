/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import { Grid, Button, Typography, Card, CardMedia } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import clsx from 'clsx';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { selectedProduct } from '../../../redux/actions/ProductActions';
import { useStyles, secondstyles } from './productDetail.styles';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ProductDetail = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { title, price, category, description, image } = product;
  const fetchProduct = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => setError('Error', err));
    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== '') fetchProduct(productId);
  }, [productId]);
  return (
    <Grid item container>
      <Grid item xs={false} sm={1} />
      <Grid item xs={12} sm={10}>
        {error !== '' ? <Alert>{error}</Alert> : false}
        <Card className={classes.root}>
          <CardMedia
            className={clsx(classes.cardMedia, classes.childflex)}
            image={image}
            title={title}
            style={secondstyles.media}
          />
          <div className={clsx(classes.childflex, classes.details)}>
            <Typography variant="h4" component="h2">
              {title}
            </Typography>
            <Typography className={classes.teal}>
              <a className={clsx('ui teal tag label', classes.tealInner)} href="/#">
                ${price}
              </a>
            </Typography>
            <Typography className={classes.typo} variant="h5">
              {category}
            </Typography>
            <Typography className={classes.teal} color="textSecondary" variant="h6">
              {description}
            </Typography>
            <Button
              size="large"
              variant="contained"
              type="submit"
              className={clsx(classes.teal, classes.button)}
            >
              Add to Cart
            </Button>
          </div>
        </Card>
      </Grid>
      <Grid item xs={false} sm={1} />
    </Grid>
  );
};

export default ProductDetail;
