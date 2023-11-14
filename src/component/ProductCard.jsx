import React from 'react';
import Grid  from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { products, addToCart, minusItem, plusItem, getTotal } from '../../apis/service';

function ProductCard({ product }) {
  const { id , title, image, description, price , quantity} = product;

  const handleAddToCart = () => {
    addToCart(product);
  };


  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
        <CardMedia
          component="img"
          alt={title}
          height="200"
          image={image}
        />
        <CardContent>
          <Typography variant="h6" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body1" color="primary">
            Price: ${price}
          </Typography>
          <Button variant="contained" color="primary"  onClick={handleAddToCart}>
            addToCard
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default ProductCard;
