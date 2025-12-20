// gallery.js - JavaScript for Gallery page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Load gallery items from data.js
    const galleryContainer = document.getElementById('gallery-container');
    const galleryItems = window.jesusTribeData.galleryItems;
   
    if (galleryContainer && galleryItems) {
        renderGallery(galleryItems);
        setupGalleryFilters(galleryItems);
        setupLightbox(galleryItems);
    }
   
    // Function to render gallery
    function renderGallery(itemsToRender) {
        let html = '';
       
        if (itemsToRender.length === 0) {
            html = '<p class="no-images">No gallery items available at the moment.</p>';
        } else {
            itemsToRender.forEach(item => {
                html += `
                <div class="gallery-item" data-category="${item.category}" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="gallery-overlay">
                        <h4>${item.title}</h4>
                        <p>${item.description}</p>
                    </div>
                </div>
                `;
            });
        }
       
        galleryContainer.innerHTML = html;
       
        // Add click event to gallery items
        const galleryItemsElements = document.querySelectorAll('.gallery-item');
        galleryItemsElements.forEach(item => {
            item.addEventListener('click', function() {
                const itemId = parseInt(this.getAttribute('data-id'));
                openLightbox(itemId);
            });
        });
    }
   
    // Function to setup gallery filters
    function setupGalleryFilters(allItems) {
        const filterButtons = document.querySelectorAll('.gallery-filter-btn');
       
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
               
                const filter = this.getAttribute('data-filter');
               
                // Filter items
                let filteredItems;
                if (filter === 'all') {
                    filteredItems = allItems;
                } else {
                    filteredItems = allItems.filter(item => item.category === filter);
                }
               
                // Render filtered items
                renderGallery(filteredItems);
            });
        });
    }
   
    // Function to setup lightbox
    function setupLightbox(items) {
        const lightbox = document.getElementById('gallery-lightbox');
        const closeBtn = document.querySelector('.close-lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const prevBtn = document.querySelector('.lightbox-prev');
        const nextBtn = document.querySelector('.lightbox-next');
       
        let currentIndex = 0;
       
        // Close lightbox when clicking X
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                lightbox.style.display = 'none';
            });
        }
       
        // Close lightbox when clicking outside
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                lightbox.style.display = 'none';
            }
        });
       
        // Navigation functions
        function showImage(index) {
            if (index >= 0 && index < items.length) {
                currentIndex = index;
                const item = items[currentIndex];
               
                lightboxImage.src = item.image;
                lightboxImage.alt = item.title;
                lightboxCaption.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
            }
        }
       
        function showPrevImage() {
            let newIndex = currentIndex - 1;
            if (newIndex < 0) newIndex = items.length - 1;
            showImage(newIndex);
        }
       
        function showNextImage() {
            let newIndex = currentIndex + 1;
            if (newIndex >= items.length) newIndex = 0;
            showImage(newIndex);
        }
       
        // Add event listeners to navigation buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                showPrevImage();
            });
        }
       
        if (nextBtn) {
            nextBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                showNextImage();
            });
        }
       
        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'ArrowLeft') {
                    showPrevImage();
                } else if (e.key === 'ArrowRight') {
                    showNextImage();
                } else if (e.key === 'Escape') {
                    lightbox.style.display = 'none';
                }
            }
        });
       
        // Function to open lightbox with specific image
        window.openLightbox = function(itemId) {
            const index = items.findIndex(item => item.id === itemId);
            if (index !== -1) {
                showImage(index);
                lightbox.style.display = 'flex';
            }
        };
    }
});




