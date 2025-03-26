document.addEventListener('DOMContentLoaded', function () {
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get('id'));
    const products = window.products;
    const product = products.find(p => p.id === productId);
    const container = document.getElementById('product-details');

    if (product) {
        container.innerHTML = `
            <div class="product-page">
                <div class="back-button-wrapper">
                    <button class="back-button" onclick="history.back()">BACK</button>
                </div>

                <img src="${product.img}" alt="${product.name}">

                <div class="product-details">
                    <h1>${product.name}</h1>
                    <p class="product-price">${product.price} $</p>
                    <p class="product-description">${product.description}</p>
                    <div class="sizes">
                        <button data-size="S">S</button>
                        <button data-size="M">M</button>
                        <button data-size="L">L</button>
                    </div>
                    <button class="add-to-cart">ADD TO CART</button>
                </div>
            </div>
        `;

        let selectedSize = null;
        const sizeButtons = container.querySelectorAll('.sizes button');
        sizeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                sizeButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                selectedSize = btn.dataset.size;
            });
        });

        const addToCartBtn = container.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => {
            if (!selectedSize) return;

            if (typeof addToCart === 'function') {
                addToCart({
                    id: product.id,
                    name: product.name,
                    img: product.img,
                    price: product.price,
                    size: selectedSize
                });
            }
        });
    } else {
        container.innerHTML = '<p>Товар не найден.</p>';
    }
});


