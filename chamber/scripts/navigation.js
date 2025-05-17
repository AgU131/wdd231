// Menu toggle for mobile view (HAMBURGER BUTTON)
const hamburgerBtn = document.getElementById('hamburger-btn');
const primaryNav = document.getElementById('primary-nav');

if (hamburgerBtn && primaryNav) {
    hamburgerBtn.addEventListener('click', function() {
        primaryNav.classList.toggle('show');
        // Toggle between hamburger and close icon
        const isOpen = primaryNav.classList.contains('show');
        hamburgerBtn.textContent = isOpen ? '✕' : '☰';
        hamburgerBtn.setAttribute('aria-expanded', isOpen);
    });
    
    // Close menu when clicking on a link
    primaryNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 768) {
                primaryNav.classList.remove('show');
                hamburgerBtn.textContent = '☰';
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });
}


/*
//sugerencia de copilot para hacer el "active" automatico con js: 
<script>
    // Selecciona todos los enlaces del nav
    document.querySelectorAll('#primary-nav a').forEach(link => {
        if (link.href === window.location.href || link.href === window.location.origin + window.location.pathname) {
        link.classList.add('active');
        }
    });
</script> 
*/