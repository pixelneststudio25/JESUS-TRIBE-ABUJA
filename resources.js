// resources.js - JavaScript for Resources page functionality

document.addEventListener('DOMContentLoaded', function() {
    // Load daily scripture
    const dailyScriptureContainer = document.getElementById('daily-scripture');
    const scriptures = window.jesusTribeData.dailyScriptures;
   
    if (dailyScriptureContainer && scriptures) {
        loadRandomScripture();
       
        // Add event listener to "Get Another Scripture" button
        const newScriptureBtn = document.getElementById('new-scripture-btn');
        if (newScriptureBtn) {
            newScriptureBtn.addEventListener('click', loadRandomScripture);
        }
    }
   
    // Load devotionals
    const devotionalsContainer = document.getElementById('devotionals-container');
    const devotionals = window.jesusTribeData.devotionals;
   
    if (devotionalsContainer && devotionals) {
        renderDevotionals(devotionals);
    }
   
    // Function to load random scripture
    function loadRandomScripture() {
        const randomIndex = Math.floor(Math.random() * scriptures.length);
        const scripture = scriptures[randomIndex];
       
        const html = `
            <div class="scripture-content">"${scripture.verse}"</div>
            <div class="scripture-reference">${scripture.reference}</div>
        `;
       
        dailyScriptureContainer.innerHTML = html;
    }
   
    // Function to render devotionals
    function renderDevotionals(devotionalsToRender) {
        let html = '';
       
        if (devotionalsToRender.length === 0) {
            html = '<p class="no-devotionals">No devotionals available at the moment. Check back soon!</p>';
        } else {
            devotionalsToRender.forEach(devotional => {
                html += `
                <div class="devotional-card">
                    <div class="devotional-week">${devotional.week}</div>
                    <h3 class="devotional-title">${devotional.title}</h3>
                    <div class="devotional-scripture">${devotional.scripture}</div>
                    <p class="devotional-preview">${devotional.preview}</p>
                    <a href="${devotional.pdfLink}" class="btn btn-primary" target="_blank">
                        <i class="fas fa-download"></i> Download PDF
                    </a>
                </div>
                `;
            });
        }
       
        devotionalsContainer.innerHTML = html;
    }
});





