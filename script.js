// script.js 1
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    // Detect if we're in a subfolder
    const isInSubfolder = window.location.pathname.split('/').length > 2;
    const basePath = isInSubfolder ? '../' : '';

    // Update all navigation links to use the correct path
    const updateNavigationPaths = () => {
        const allNavLinks = document.querySelectorAll('nav a[href^="index.html"], nav a[href^="#"]');
        
        allNavLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href.startsWith('index.html')) {
                // For links that already point to index.html, add the base path
                link.href = basePath + href;
            } else if (href.startsWith('#') && isInSubfolder) {
                // For hash links in subfolders, add the path to index.html
                link.href = basePath + 'index.html' + href;
            }
        });
    };

    // Update paths when the page loads
    updateNavigationPaths();

    // Toggle mobile menu
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
        // Toggle between menu and close icons
        const icon = this.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});
