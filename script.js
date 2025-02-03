// Create a new file called script.js
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
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

    // Close mobile menu when clicking a link (for smooth scrolling experience)
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
