document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    // Toggle navigation menu on mobile
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });

    // Toggle dropdowns on mobile
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        const dropdownContent = dropdown.querySelector('.dropdown-content');

        dropbtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (window.innerWidth <= 768) {
                dropdownContent.classList.toggle('show');
            }
        });
    });

    // Hide menu when resizing back to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navMenu.classList.remove('show');
            document.querySelectorAll('.dropdown-content').forEach(content => {
                content.classList.remove('show');
            });
        }
    });

    // Close dropdown and nav menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.matches('.dropbtn') && !e.target.closest('nav')) {
            document.querySelectorAll('.dropdown-content.show').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
        if (!e.target.closest('.hamburger') && !e.target.closest('nav')) {
            navMenu.classList.remove('show');
        }
    });
});
