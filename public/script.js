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
    });
    
    // Find the button that triggered this and add active class
    document.querySelector(`button[onclick="showSection('${sectionId}')"]`).classList.add('active');
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
    });
    
    document.getElementById(tabId + 'Tab').classList.add('active');
}

// Form submission (demo)
document.addEventListener('DOMContentLoaded', function() {
    const formButton = document.querySelector('form button');
    if (formButton) {
        formButton.addEventListener('click', function() {
            alert('This is a demo form. In a real implementation, this would send your message.');
        });
    }
}); 
