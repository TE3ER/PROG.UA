document.addEventListener("DOMContentLoaded", function() {
    
    const products = [
        { name: "Банан", price: 2 },
        { name: "Малина", price: 3 },
        { name: "Lays", price: 1 },
        { name: "Pepsi", price: 1 },
        { name: "Пармезан", price: 6 },
    ];

  
    function addProductsToMenu() {
        const productList = document.getElementById("product-list");

        products.forEach(product => {
            const listItem = document.createElement("li");
            listItem.textContent = `${product.name}: $${product.price}`;
            productList.appendChild(listItem);
        });
    }

    
    addProductsToMenu();
});
