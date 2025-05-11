// Navigation
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });
}

// Service Tabs
function showServiceTab(tabId) {
    // Hide all service content
    document.querySelectorAll('.service-content').forEach(content => {
        content.classList.add('hidden');
        content.classList.remove('active');
    });
    
    // Show selected service content
    document.getElementById(tabId).classList.remove('hidden');
    document.getElementById(tabId).classList.add('active');
    
    // Update active tab
    document.querySelectorAll('.service-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.id === tabId + 'Tab') {
            tab.classList.add('active');
        }
    });
}

// Form submission (demo)
document.addEventListener('DOMContentLoaded', function() {
    const formButton = document.querySelector('form button');
    if (formButton) {
        formButton.addEventListener('click', function() {
            alert('This is a demo form. In a real implementation, this would send your message.');
        });
    }
    
    // Tampilkan section home secara default
    showSection('home');
    
    // Tambahkan event listener untuk smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Parallax effect untuk crypto background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const grid = document.querySelector('.crypto-grid');
        const bg = document.querySelector('.crypto-bg');
        
        if (grid && bg) {
            grid.style.transform = `translateY(${scrolled * 0.5}px)`;
            bg.style.transform = `translateY(${scrolled * 0.2}px)`;
        }
    });
    
    // Tambahkan animasi floating ke crypto symbols
    document.querySelectorAll('.crypto-symbol').forEach((symbol, index) => {
        symbol.style.animationDelay = `${index * 2}s`;
    });
}); 
