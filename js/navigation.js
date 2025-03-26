document.addEventListener('DOMContentLoaded', function () {
    const categoryLinks = document.querySelectorAll('header nav ul li a');
    const aboutbrand = document.getElementById('about-brand');
    const filterSection = document.getElementById('filter-section');

    function loadContentFromNav(category) {
        if (category === 'brand') {
            aboutbrand.style.display = 'block';
            filterSection.style.display = 'none';
            document.getElementById('main-section').innerHTML = '';
        } else {
            window.loadContent(category);
        }
    }

    function setActiveLink(category) {
        categoryLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('data-category') === category);
        });
    }

    categoryLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const category = this.getAttribute('data-category');
            loadContentFromNav(category);
            setActiveLink(category);
            history.pushState({ category }, '', `?category=${category}`);
        });
    });

    window.addEventListener('popstate', function (event) {
        if (event.state && event.state.category) {
            loadContentFromNav(event.state.category);
            setActiveLink(event.state.category);
        }
    });

    const initialCategory = new URLSearchParams(window.location.search).get('category');
    if (initialCategory) {
        loadContentFromNav(initialCategory);
        setActiveLink(initialCategory);
    } else {
        aboutbrand.style.display = 'block';
        filterSection.style.display = 'none';
    }
});



