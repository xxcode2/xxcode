// Fungsi untuk menampilkan section
function showSection(sectionId) {
    // Sembunyikan semua section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
        section.style.display = 'none';
    });
    
    // Tampilkan section yang dipilih
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
        selectedSection.style.display = 'block';
    }
    
    // Update active state pada nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(sectionId)) {
            link.classList.add('active');
        }
    });
}

// Fungsi untuk menampilkan service tab
function showServiceTab(tabId) {
    // Update active state pada service tabs
    document.querySelectorAll('.service-tab').forEach(tab => {
        tab.classList.remove('active');
        if (tab.id === tabId + 'Tab') {
            tab.classList.add('active');
        }
    });
    
    // Tampilkan konten yang sesuai
    document.querySelectorAll('.service-content').forEach(content => {
        content.classList.remove('active');
        content.style.display = 'none';
        if (content.id === tabId) {
            content.classList.add('active');
            content.style.display = 'block';
        }
    });
}

// Inisialisasi saat dokumen dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Tampilkan section home secara default
    showSection('home');
    
    // Tambahkan event listener untuk smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            showSection(targetId);
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

    // Tambahkan event listener untuk form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('This is a demo form. In a real implementation, this would send your message.');
        });
    }
}); 
