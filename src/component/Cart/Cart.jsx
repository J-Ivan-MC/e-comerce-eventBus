import * as React from 'react';
import { cart, minusItem, plusItem, getTotal } from '../../../apis/service';

const Cart = () => {
    const handlePlus = (product) => {
        plusItem(product);
    };
    const handle = () => {
        console.log("helo ",cart);
    };

    return (
        <div>
            <h2>Carrito de compras</h2>
            <button onClick={() => handle()}>+</button>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <img src={item.image} alt={item.name} />
                        <p>{item.name}</p>
                        <p>Cantidad: {item.quantity}</p>
                        <button onClick={() => minusItem(item)}>-</button>
                        <button onClick={() => handlePlus(item)}>+</button>
                    </li>
                ))}
            </ul>
            <p>Total: ${getTotal()}</p>
        </div>
    );
};

export default Cart;