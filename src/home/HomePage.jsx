import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { data } from '../../apis/card'


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
            </Grid>
        </div>
    );
}

export default HomePage;


