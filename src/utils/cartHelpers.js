// INTERNAL HELPER FUNCTIONS

const searchCart = (productID) => {
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    let searchResults = 0;
    if (currentCart !== null) {
        currentCart.forEach(item => {
            if (item.id === productID) {
                searchResults++
            }
        })
    }
    return searchResults
}

const showCart = () => {
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    console.log(`Current Cart:`);
    console.log(currentCart)
}

const updateCartCounter = () => {

}


// CART FUNCTIONS

const updateCart = (product, quantity) => {
    // Get Current Cart
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    // If already in cart
    if (searchCart(product.id) > 0) {
        //Find index
        let index = currentCart.findIndex((item => item.id === product.id));

        // Update Item
        currentCart[index].quantity = quantity;
        console.log("Item Quantity Updated")
    }
    // If not in cart
    else {
        // Add new Item
        let newItem = {
            id: product.id,
            quantity: quantity,
            price: product.price
        }

        // Create New Cart
        if (currentCart === null) {
            currentCart = [newItem];
        }

        // Just add to cart
        else {
            currentCart.push(newItem);
        }
        console.log("Item Added to Cart")

    }

    // Save
    localStorage.setItem("cart", JSON.stringify(currentCart));
    showCart()
    // updateCartCounter();
}

const removeFromCart = (product) => {
    // Get Current Cart & Index of Item
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    let index = currentCart.findIndex((item => item.id === product.id));

    // Update Cart
    currentCart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(currentCart));
    // updateCartCounter();
}

const getCart = () => {
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    return currentCart
}

const getCartTotal = () => {
    let currentCart = JSON.parse(localStorage.getItem("cart"));
    let total = 0;
    currentCart.forEach(item => {
        total += (item.price * item.quantity)
    })
    return total
}


const clearCart = () => {
    localStorage.removeItem("cart");
    // updateCartCounter();
}


export {
    updateCart,
    removeFromCart,
    showCart,
    getCart,
    getCartTotal,
    clearCart
}