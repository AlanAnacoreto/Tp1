document.addEventListener("DOMContentLoaded", function () {
    const products = [
        { id: 1, name: "Producto 1", price: 10.00 },
        { id: 2, name: "Producto 2", price: 15.00 }
        // Agrega mas productos aca
    ];
//debo de aclarar todo //
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const customAddToCartButton = document.getElementById("add-custom-to-cart");
    const cartList = document.getElementById("cart");
    const totalElement = document.getElementById("total");
    const quantityInput = document.getElementById("quantity");
    const productSelect = document.getElementById("product-select");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", addToCart);
    });

    customAddToCartButton.addEventListener("click", addToCart);

    function addToCart(event) {
        let productId = null;
        let productName = "";
        let productPrice = 0.00;

        if (event.target.id === "add-custom-to-cart") {
            const selectedProductId = parseInt(productSelect.value);
            const selectedProduct = products.find(product => product.id === selectedProductId);

            if (selectedProduct) {
                productId = selectedProduct.id;
                productName = selectedProduct.name;
                productPrice = selectedProduct.price;
            }
        } else {
            const product = event.target.parentElement;
            productId = parseInt(product.dataset.id);
            productName = product.dataset.name;
            productPrice = parseFloat(product.dataset.price);
        }

        const quantity = parseInt(quantityInput.value) || 1;

        const cartItem = document.createElement("li");
        cartItem.innerHTML = `${productName} x${quantity} - $${(productPrice * quantity).toFixed(2)}`;
        cartList.appendChild(cartItem);

        updateTotal(productPrice * quantity);
    }

    function updateTotal(price) {
        let total = parseFloat(totalElement.innerText.replace("$", ""));
        total += price;
        totalElement.innerText = "$" + total.toFixed(2);
    }
});
document.addEventListener("DOMContentLoaded", function () {
    let products = [];  

    // Cargamos los productos desde el archivo JSON
    fetch('products.json')
        .then(response => response.json())
        .then(data => products = data)
        .catch(error => console.error('Error:', error));