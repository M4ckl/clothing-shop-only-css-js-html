document.addEventListener('DOMContentLoaded', function () {
    const contentContainer = document.getElementById('main-section');
    const aboutBrand = document.getElementById('about-brand');
    const filterContainer = document.getElementById('filter-section');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCount = document.getElementById('product-count');

    const products = window.products;

    function loadContent(category) {
        aboutBrand.style.display = 'none';
        filterContainer.style.display = 'flex';

        contentContainer.innerHTML = `<div class="product-grid"></div>`;
        const productGrid = contentContainer.querySelector('.product-grid');

        let filteredProducts = category === 'all'
            ? products
            : products.filter(p => p.category === category);

        function applyGenderFilter(gender) {
            const genderFiltered = gender === 'all'
                ? filteredProducts
                : filteredProducts.filter(p => p.gender === gender);

            productGrid.innerHTML = '';
            productCount.textContent = `${genderFiltered.length} ITEMS`;

            genderFiltered.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <div class="product-image-wrapper">
                        <img src="${product.img}" alt="${product.name}" class="product-image">
                    </div>
                    <div class="product-bottom">
                        <div class="product-top-row">
                            <h3>${product.name}</h3>
                            <p class="product-price">${product.price} $</p>
                        </div>
                        <p class="product-description">${product.onstore}</p>
                    </div>
                `;

                productElement.addEventListener('click', () => {
                    window.location.href = `product.html?id=${product.id}`;
                });

                productGrid.appendChild(productElement);
            });
        }

        // Обработка кнопок пола (men/women)
        filterButtons.forEach(button => {
            button.onclick = () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                applyGenderFilter(button.dataset.gender);
            };
        });

        applyGenderFilter('all'); // по умолчанию показываем все
    }

    window.loadContent = loadContent;
});



