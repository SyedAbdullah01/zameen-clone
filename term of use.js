// =================================================================================
// DATA IMPORT
// =================================================================================
import { pageData } from './data.js';

// =================================================================================
// POPULATION FUNCTIONS
// =================================================================================

/**
 * Populates the navigation logo using data from pageData.
 */
function populateNavLogo() {
  const container = document.getElementById('nav-logo-container-terms');
  if (!container) return;
  const { logo } = pageData.nav;
  container.innerHTML = `
    <a class="flex items-center space-x-2 shrink-0" href="#">
      <img alt="${logo.alt}" class="block" height="30" src="${logo.src}" width="90"/>
    </a>
  `;
}

/**
 * Populates the "Get the Zameen App" section using data from pageData.
 */
function populateGetAppSection() {
  const container = document.getElementById('get-the-app-section');
  if (!container) return;

  const { title, description, badges, mainImage, qrCode } = pageData.app;

  // Generate HTML for badges
  const badgesHtml = badges.map(badge => `
    <a href="${badge.href}" aria-label="${badge.ariaLabel}" target="_blank" rel="noopener noreferrer">
      <img alt="${badge.alt}" src="${badge.src}" class="block max-w-[80px] h-auto" height="24" width="80" loading="lazy" />
    </a>
  `).join('');

  container.innerHTML = `
    <div class="flex flex-col sm:flex-row items-center justify-between">
      <div class="max-w-xs sm:max-w-sm">
        <h3 class="text-[#3ca54d] font-bold text-lg sm:text-xl mb-1">
          ${title.replace('Get the', 'Get the ')}
        </h3>
        <p class="text-xs sm:text-sm font-semibold">
          ${description}
        </p>
      </div>
      <div class="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mt-4 sm:mt-0">
        <img alt="${mainImage.alt}" class="block max-w-full h-auto" height="${mainImage.height}" src="${mainImage.src}" width="${mainImage.width}" loading="lazy"/>
        <div class="text-xs sm:text-sm text-center mt-4 sm:mt-0">
          <p class="mb-1 font-semibold">
            ${qrCode.text}
          </p>
          <img alt="${qrCode.alt}" class="mx-auto" height="${qrCode.height}" src="${qrCode.src}" width="${qrCode.width}" loading="lazy"/>
          <div class="flex items-center justify-center space-x-2 mt-2">
            ${badgesHtml}
          </div>
        </div>
      </div>
    </div>
  `;
}

/**
 * Populates the "Our Home Partners" section using data from pageData.
 */
function populatePartners() {
  const container = document.getElementById('home-partners-container');
  if (!container) return;
  const { logo } = pageData.partners;
  container.innerHTML = `
    <h4 class="text-xs font-semibold mb-2">
      Our Home Partners
    </h4>
    <img alt="${logo.alt}" class="block max-w-[120px] h-auto" height="40" src="${logo.src}" width="120" loading="lazy"/>
  `;
}

// =================================================================================
// INITIALIZATION
// =================================================================================

// Ensure the DOM is fully loaded before running population functions
document.addEventListener('DOMContentLoaded', () => {
  populateNavLogo();
  populateGetAppSection();
  populatePartners();
});
