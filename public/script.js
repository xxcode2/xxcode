// Function to show section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
    
    // Update active state on nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick')?.includes(sectionId)) {
            link.classList.add('active');
        }
    });
}

// Function to show service tab
function showServiceTab(tabId) {
    // Update active state on tabs
    document.querySelectorAll('.service-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
    
    // Update content visibility
    document.querySelectorAll('.service-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId + '-content').classList.add('active');
}

// Event listener when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize home section
    showSection('home');
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
        });
    });
    
    // Parallax effect for crypto background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // Animation for crypto symbols
    const cryptoSymbols = document.querySelectorAll('.crypto-symbol');
    cryptoSymbols.forEach((symbol, index) => {
        symbol.style.animationDelay = `${index * 0.2}s`;
    });
    
    // Handle form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Handle mobile menu
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
}); 
