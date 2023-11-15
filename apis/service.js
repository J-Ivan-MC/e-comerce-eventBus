export let cart = [];

export let products = [
    {id: 1, name: "Apple", image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png", price: 10, quantity: 1, description: " new description"},
    {id: 2, name: "Orange", image: "https://5.imimg.com/data5/VN/YP/MY-33296037/orange-600x600-500x500.jpg", price: 11, quantity: 1, description: " new description"},
    {id: 3, name: "Grapes", image: "https://www.aicr.org/wp-content/uploads/2020/01/shutterstock_533487490-640x462.jpg", price: 12, quantity: 1, description: " new description"},
]

export function addToCart (product) {
    console.log("This ",product);
    for(let item of cart) {
        if(item.id === product.id) {
            product.quantity += 1
            console.log("Step1");
            cart = cart;
            console.log(cart);
            return;
        }
    }
    console.log("Step2");
    console.log(cart);
    cart = [...cart, product]
}

export function minusItem (product) {
    for(let item of cart) {
            if(item.id === product.id) {
                if(product.quantity > 1 ) {
                    product.quantity -= 1
                    cart = cart
                } else {
                    cart = cart.filter((cartItem) => cartItem != product)
                }
                return;
            }
    }
}

export function plusItem (product) {
    for(let item of cart) {
        if(item.id === product.id) {
            item.quantity += 1
            cart = cart;
            return;
        }
    }
}

export function getTotal() {
    console.log(cart.reduce((sum, item) => sum + item.price * item.quantity, 0));
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
