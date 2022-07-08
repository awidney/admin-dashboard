const nav_links = document.querySelectorAll('nav a');

nav_links.forEach((link) => {
    link.addEventListener('mouseover', () => {
        link.children[0].children[0].classList.add('color-fill');
        link.children[0].classList.add('scale');
    });
});

nav_links.forEach((link) => {
    link.addEventListener('mouseleave', () => {
        link.children[0].children[0].classList.remove('color-fill');
        link.children[0].classList.remove('scale');
    }); 
});