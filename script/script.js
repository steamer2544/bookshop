// function to add a book to local storage and navigate to cart
function addToLocalStorageAndNavigate(title, price) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push({ title, price });
    localStorage.setItem("cart", JSON.stringify(cart));

    // navigate to cart.html
    window.location.href = "cart.html";
}

// function to click to adding books to the cart
const addToCartButtons = document.querySelectorAll(".addToCartButton");
addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
        const bookTitle = this.getAttribute("data-title");
        const bookPrice = parseFloat(this.getAttribute("data-price"));

        if (bookTitle && !isNaN(bookPrice)) {
            addToLocalStorageAndNavigate(bookTitle, bookPrice);
        }
    });
});
