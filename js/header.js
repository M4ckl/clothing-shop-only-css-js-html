document.addEventListener('DOMContentLoaded', function () {
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const countEl = document.querySelector('.cart-count');
        if (countEl) {
            countEl.textContent = cart.length;
        }
    }

    window.addToCart = function (product) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
    };

    updateCartCount();

    window.updateCartCount = updateCartCount;
});
