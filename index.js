const buttons = document.querySelectorAll(".buy-btn");
const cartItems = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("total-price");

let total = 0;

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const name = button.getAttribute("data-name");
        const price = parseFloat(button.getAttribute("data-price"));

        // Add to cart list
        const li = document.createElement("li");
        li.textContent = `${name} - ${price} tk`;
        cartItems.appendChild(li);

        // Update total
        total += price;
        totalPriceEl.textContent = total;
    });
});