// main.js - Core JavaScript for Jesus Tribe Website

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
   
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.replace('fa-bars', 'fa-times');
            } else {
                icon.classList.replace('fa-times', 'fa-bars');
            }
        });
    }
   
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon.classList.contains('fa-times')) {
                    icon.classList.replace('fa-times', 'fa-bars');
                }
            }
        });
    });
   
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
           
            // Simple form validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
           
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff3860';
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
           
            if (isValid) {
                // In a real implementation, you would send the form data to a server
                // For now, we'll show a success message
                const successModal = document.getElementById('success-modal');
                if (successModal) {
                    successModal.style.display = 'flex';
                }
               
                // Reset form
                this.reset();
            }
        });
    }
   
    // Close success modal
    const closeSuccessBtn = document.getElementById('close-success');
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', function() {
            const successModal = document.getElementById('success-modal');
            if (successModal) {
                successModal.style.display = 'none';
            }
        });
    }
   
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer.classList.contains('active')) {
                answer.classList.remove('active');
            } else {
                answer.classList.add('active');
            }
        });
    });
});






