


// events.js - JavaScript for Events page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Load events from data.js
    const eventsContainer = document.getElementById('events-container');
    const events = window.jesusTribeData.upcomingEvents;
   
    if (eventsContainer && events) {
        renderEvents(events);
        setupEventFilters(events);
        setupRegistrationModal();
    }
   
    // Function to render events
    function renderEvents(eventsToRender) {
        let html = '';
       
        if (eventsToRender.length === 0) {
            html = '<p class="no-events">No upcoming events at the moment. Check back soon!</p>';
        } else {
            eventsToRender.forEach(event => {
                const eventDate = new Date(event.date);
                const formattedDate = eventDate.toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
               
                html += `
                <div class="event-card" data-category="${event.category}">
                    <img src="${event.image}" alt="${event.title}">
                    <div class="event-content">
                        <h3>${event.title}</h3>
                        <p class="event-date">${formattedDate} at ${event.time}</p>
                        <p><strong>Location:</strong> ${event.location}</p>
                        <p>${event.description}</p>
                        <button class="btn btn-primary register-btn" data-event-id="${event.id}">
                            Register for Event
                        </button>
                    </div>
                </div>
                `;
            });
        }
       
        eventsContainer.innerHTML = html;
       
        // Add event listeners to registration buttons
        const registerButtons = document.querySelectorAll('.register-btn');
        registerButtons.forEach(button => {
            button.addEventListener('click', function() {
                const eventId = parseInt(this.getAttribute('data-event-id'));
                openRegistrationModal(eventId);
            });
        });
    }
   
    // Function to setup event filters
    function setupEventFilters(allEvents) {
        const filterButtons = document.querySelectorAll('.filter-btn');
       
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
               
                const filter = this.getAttribute('data-filter');
               
                // Filter events
                let filteredEvents;
                if (filter === 'all') {
                    filteredEvents = allEvents;
                } else {
                    filteredEvents = allEvents.filter(event => event.category === filter);
                }
               
                // Render filtered events
                renderEvents(filteredEvents);
            });
        });
    }
   
    // Function to setup registration modal
    function setupRegistrationModal() {
        const modal = document.getElementById('registration-modal');
        const closeBtn = document.querySelector('.close-modal');
       
        // Close modal when clicking X
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
        }
       
        // Close modal when clicking outside
        window.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
       
        // Handle form submission
        const registrationForm = document.getElementById('registration-form');
        if (registrationForm) {
            registrationForm.addEventListener('submit', function(e) {
                e.preventDefault();
               
                // Validate form
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
               
                // Validate age
                const ageField = document.getElementById('age');
                if (ageField) {
                    const age = parseInt(ageField.value);
                    if (age < 13 || age > 19) {
                        isValid = false;
                        ageField.style.borderColor = '#ff3860';
                        alert('You must be between 13 and 19 years old to register for Jesus Tribe events.');
                    }
                }
               
                if (isValid) {
                    // In a real implementation, you would send this data to a server
                    // For now, we'll just show an alert and close the modal
                    alert('Registration submitted successfully! You will receive a confirmation email shortly.');
                    this.reset();
                    modal.style.display = 'none';
                }
            });
        }
    }
   
    // Function to open registration modal with specific event
    function openRegistrationModal(eventId) {
        const modal = document.getElementById('registration-modal');
        const eventTitle = document.getElementById('modal-event-title');
        const eventIdField = document.getElementById('event-id');
       
        // Find the event
        const event = window.jesusTribeData.upcomingEvents.find(e => e.id === eventId);
       
        if (event && eventTitle && eventIdField) {
            eventTitle.textContent = `Register for: ${event.title}`;
            eventIdField.value = eventId;
            modal.style.display = 'flex';
        }
    }
});

