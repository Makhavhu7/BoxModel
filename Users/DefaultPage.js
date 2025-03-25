// Sample product data (replace this with an API call in a real-world scenario)
const products = [
    { ProductID: 1, ProductName: "Boxed Chocolate", ProductPrice: 29.99, ProductImage: "images/chocolate.jpg" },
    { ProductID: 2, ProductName: "Boxed Tea", ProductPrice: 15.99, ProductImage: "images/tea.jpg" },
    { ProductID: 3, ProductName: "Boxed Coffee", ProductPrice: 19.99, ProductImage: "images/coffee.jpg" },
    { ProductID: 4, ProductName: "Boxed Snacks", ProductPrice: 12.99, ProductImage: "images/snacks.jpg" },
    { ProductID: 5, ProductName: "Boxed Candles", ProductPrice: 25.99, ProductImage: "images/candles.jpg" }
];

// Load products dynamically
function loadProducts() {
    const productContainer = document.getElementById("ProductContainer");
    let output = "";

    products.forEach((product, index) => {
        if (index % 4 === 0) {
            output += "<div class='featured-box'>";
        }
        const formattedPrice = `R${product.ProductPrice.toFixed(2)}`;
        output += `
            <div class="box">
                <img src="${product.ProductImage}" alt="${product.ProductName}" style="width: 150px; height: 150px; border-radius: 10px;">
                <h3>${product.ProductName}</h3>
                <p class="price">${formattedPrice}</p>
                <button type="button" onclick="orderProduct(${product.ProductID})">Order Now</button>
            </div>
        `;
        if ((index + 1) % 4 === 0 || index === products.length - 1) {
            output += "</div>";
        }
    });

    productContainer.innerHTML = output;
}






// Handle product ordering



let cart = [];

// Add product to cart
function orderProduct(productId) {
    const selectedProduct = products.find(p => p.ProductID === productId);
    if (selectedProduct) {
        cart.push(selectedProduct);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartUI();
    }
}

// Update cart UI
function updateCartUI() {
    const cartItemsList = document.getElementById("cartItems");
    cartItemsList.innerHTML = ""; // Clear existing items

    cart.forEach(product => {
        const listItem = document.createElement("li");
        listItem.textContent = `${product.ProductName} - R${product.ProductPrice.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });
}

// Buy Now functionality
function buyNow() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    // Convert cart items to a query string
    const cartQueryString = cart.map(item => `${item.ProductName} - R${item.ProductPrice.toFixed(2)}`).join(", ");

    // Redirect to the contact page with cart data as a query parameter
    window.location.href = "../Manager/ContactInformation.html?cart=" + encodeURIComponent(cartQueryString);
}

// Clear the cart
document.addEventListener("DOMContentLoaded", () => {
    loadProducts();

    const clearCartButton = document.getElementById("clearCart");
    clearCartButton.addEventListener("click", () => {
        cart = [];
        updateCartUI();
    });
});