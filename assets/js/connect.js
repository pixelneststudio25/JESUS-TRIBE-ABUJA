
// connect.js - JavaScript for Connect page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Form submission for connect page
    const contactForm = document.getElementById('contact-form');
    const successModal = document.getElementById('success-modal');
    const closeSuccessBtn = document.getElementById('close-success');
   
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
           
            // Form validation
            const requiredFields = this.querySelectorAll('[required]');
            let isValid = true;
           
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.style.borderColor = '#ff3860';
                   
                    // Add error message
                    let errorMsg = field.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-msg')) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-msg';
                        errorMsg.style.color = '#ff3860';
                        errorMsg.style.fontSize = '0.85rem';
                        errorMsg.style.marginTop = '5px';
                        field.parentNode.appendChild(errorMsg);
                    }
                    errorMsg.textContent = 'This field is required';
                } else {
                    field.style.borderColor = '#ddd';
                   
                    // Remove error message
                    const errorMsg = field.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-msg')) {
                        errorMsg.remove();
                    }
                }
            });
           
            // Validate age
            const ageField = document.getElementById('age');
            if (ageField) {
                const age = parseInt(ageField.value);
                if (age < 13 || age > 19) {
                    isValid = false;
                    ageField.style.borderColor = '#ff3860';
                   
                    let errorMsg = ageField.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-msg')) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-msg';
                        errorMsg.style.color = '#ff3860';
                        errorMsg.style.fontSize = '0.85rem';
                        errorMsg.style.marginTop = '5px';
                        ageField.parentNode.appendChild(errorMsg);
                    }
                    errorMsg.textContent = 'You must be between 13 and 19 years old';
                }
            }
           
            // Validate email format
            const emailField = document.getElementById('email');
            if (emailField && emailField.value.trim()) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    isValid = false;
                    emailField.style.borderColor = '#ff3860';
                   
                    let errorMsg = emailField.nextElementSibling;
                    if (!errorMsg || !errorMsg.classList.contains('error-msg')) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-msg';
                        errorMsg.style.color = '#ff3860';
                        errorMsg.style.fontSize = '0.85rem';
                        errorMsg.style.marginTop = '5px';
                        emailField.parentNode.appendChild(errorMsg);
                    }
                    errorMsg.textContent = 'Please enter a valid email address';
                }
            }
           
            if (isValid) {
                // Show success modal
                if (successModal) {
                    successModal.style.display = 'flex';
                }
               
                // In a real implementation, you would send the form data to a server
                console.log('Form submitted with data:', {
                    name: document.getElementById('name').value,
                    age: document.getElementById('age').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    parentEmail: document.getElementById('parent-email').value,
                    subject: document.getElementById('subject').value,
                    message: document.getElementById('message').value
                });
               
                // Reset form
                this.reset();
            }
        });
    }
   
    // Close success modal
    if (closeSuccessBtn) {
        closeSuccessBtn.addEventListener('click', function() {
            if (successModal) {
                successModal.style.display = 'none';
            }
        });
    }
   
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === successModal) {
            successModal.style.display = 'none';
        }
    });
});
