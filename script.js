// Generate affiliate links
function getAffiliateLink(offer) {
    const { platform, id } = offer;
    if (platform === 'clickbank' && AFFILIATE_IDS.clickbank) {
        return `https://hop.clickbank.net/?affiliate=${AFFILIATE_IDS.clickbank}&vendor=${id}`;
    }
    return '#';
}

// Create offer cards
function createOfferCard(offer) {
    return `
        <div class="offer-card">
            <div class="offer-image-container">
                <img src="${offer.image}" alt="${offer.title}" class="offer-image" loading="lazy">
            </div>
            <div class="offer-content">
                <h2 class="offer-title">${offer.title}</h2>
                <p class="offer-description">${offer.description}</p>
                <ul class="features-list">
                    ${offer.features.map(feature => `
                        <li class="feature-item">${feature}</li>
                    `).join('')}
                </ul>
                <div class="price">$${offer.price}</div>
                <p class="price-note">One-time purchase • Free shipping</p>
                <a href="${getAffiliateLink(offer)}" class="cta-button" target="_blank" rel="noopener">
                    ${offer.ctaText}
                </a>
            </div>
        </div>
    `;
}

// Initialize the page
function init() {
    // Render offers
    const offersContainer = document.getElementById('offers');
    offersContainer.innerHTML = OFFERS.map(createOfferCard).join('');
    
    // Update footer year
    document.getElementById('year').textContent = new Date().getFullYear();
}

// Start the app
document.addEventListener('DOMContentLoaded', init);