// Page Loader Functionality
document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('page-loader');
    const body = document.body;
    
    // Add active class initially
    loader.classList.add('active');
    body.style.overflow = 'hidden'; // Prevent scrolling during load
    
    // Function to hide loader
    function hideLoader() {
        loader.classList.remove('active');
        loader.classList.add('fade-out');
        body.style.overflow = ''; // Restore scrolling
        
        // Remove loader from DOM after animation
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
    
    // Hide loader when everything is loaded
    window.addEventListener('load', hideLoader);
    
    // Fallback: hide loader after minimum time (3 seconds) even if not fully loaded
    setTimeout(() => {
        if (loader.classList.contains('active')) {
            hideLoader();
        }
    }, 3000);
    
    // Handle page transitions (if using SPA-like navigation)
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && link.href && !link.href.includes('#') && !link.href.includes('mailto:') && !link.href.includes('tel:')) {
            // Show loader for navigation
            loader.style.display = 'flex';
            loader.classList.remove('fade-out');
            loader.classList.add('active');
            body.style.overflow = 'hidden';
        }
    });
});
