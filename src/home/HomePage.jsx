import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { data } from '../../apis/card'
import ProductCard,{ ProductCard2} from '../component/ProductCard';


const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10 },
    { id: 2, nombre: 'Producto 2', precio: 15 },
    { id: 3, nombre: 'Producto 3', precio: 20 },
];


function HomePage() {
    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Productos
            </Typography>
            <Grid container spacing={2}>
                {productos.map((producto) => (
                    <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {producto.nombre}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Precio: ${producto.precio}
                                </Typography>
                                {/* Aquí puedes agregar más detalles del producto, como una imagen, descripción, botón de compra, etc. */}
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                <ProductCard
                    product={{
                        title: 'Producto de ejemplo',
                        image: 'https://mui.com/static/images/cards/contemplative-reptile.jpg',
                        description: 'Descripción del producto de ejemplo',
                        price: 19.99,
                        stock: 10,
                    }}
                />
                <ProductCard2></ProductCard2>
            </Grid>
        </div>
    );
}

export default HomePage;


