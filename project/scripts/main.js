document.addEventListener("DOMContentLoaded", () => {
    const currentPath = location.pathname.split('/').pop().split('.')[0];
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === currentPath || (currentPath === '' && page === 'home')) {
            link.classList.add('active');
        }
    });
});
