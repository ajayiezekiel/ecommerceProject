import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3, 1, 1),
  },
  card: {
    width: '303px',
    height: '100%',
  },
  img: {
    height: '250px',
    width: '300px',
    padding: '20px',
    objectFit: 'initial',
    backgroundSize: 'contain',
    [theme.breakpoints.down('xs')]: {
      padding: 5,
    },
    transition: 'transform 0.15s ease-in-out',
    '&:hover': { transform: 'scale3d(1.05, 1.05, 1)' },
  },
  link: {
    textDecoration: 'none',
  },
}));

const Product = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { title, price, category, image, id } = product;
    return (
      <div className={classes.root}>
        <Link to={`/product/${id}`} className={classes.link}>
          <Card className={classes.card}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={image}
                title={title}
                className={classes.img}
              />
              <CardContent>
                <Typography variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="h6" color="secondary" component="h3">
                  ${price}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary" component="h4">
                  {category}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                See More
              </Button>
            </CardActions>
          </Card>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default Product;
