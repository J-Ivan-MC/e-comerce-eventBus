import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import ProductCard from '../component/ProductCard';
import { products, addToCart, minusItem, plusItem, getTotal } from '../../apis/service';
import Cart from "../component/Cart/Cart"

function HomePage() {
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Products{getTotal}
            </Typography>
            <Grid container spacing={2}>
                {products.map((product) => (
                    <ProductCard
                        product={{
                            id : product.id,
                            title: product.name,
                            image: product.image,
                            description: product.description,
                            price: product.price,
                            quantity: product.quantity
                        }}
                    />
                ))}
            </Grid>
            <Cart/>
        </div>
    );
}

export default HomePage;
