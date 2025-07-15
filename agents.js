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
  const container = document.getElementById('nav-logo-container-agents');
  if (!container) return;
  const { logo } = pageData.nav;
  container.innerHTML = `
    <a class="flex items-center space-x-2 flex-shrink-0" href="#">
      <img alt="${logo.alt}" class="h-7 w-auto" height="30" src="${logo.src}" width="100"/>
    </a>
  `;
}

/**
 * Populates the "Get the Zameen App" section using data from pageData.
 */
function populateGetAppSection() {
  const container = document.getElementById('get-the-app-section-agents');
  if (!container) return;

  const { title, description, badges, mainImage, qrCode } = pageData.app;

  // Generate HTML for badges
  const badgesHtml = badges.map(badge => `
    <img
      alt="${badge.alt}"
      class="h-7 w-auto select-none"
      height="30"
      src="${badge.src}"
      width="90"
      loading="lazy"
    />
  `).join('');

  container.innerHTML = `
    <div class="flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
      <div class="max-w-xs sm:max-w-sm text-center sm:text-left">
        <h3 class="text-[#2ea247] font-extrabold text-lg sm:text-xl leading-tight">
          ${title}
        </h3>
        <p class="font-bold text-xs sm:text-sm">
          ${description}
        </p>
      </div>
      <div class="relative w-[280px] h-[160px] sm:w-[320px] sm:h-[180px]">
        <img
          alt="${mainImage.alt}"
          class="absolute top-0 left-0 w-full h-full object-contain select-none pointer-events-none"
          height="${mainImage.height}"
          loading="lazy"
          src="${mainImage.src}"
          width="${mainImage.width}"
        />
      </div>
      <div class="flex flex-col items-center space-y-3">
        <div class="flex space-x-3">
          ${badgesHtml}
        </div>
        <div class="flex items-center space-x-3">
          <img
            alt="${qrCode.alt}"
            class="h-14 w-14 select-none"
            height="${qrCode.height}"
            src="${qrCode.src}"
            width="${qrCode.width}"
            loading="lazy"
          />
          <p class="text-xs font-bold">${qrCode.text}</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Populates the "Our Home Partners" section using data from pageData.
 */
function populatePartners() {
  const container = document.getElementById('home-partners-container-agents');
  if (!container) return;
  const { logo } = pageData.partners;
  container.innerHTML = `
    <h4 class="font-semibold mb-3">Our Home Partners</h4>
    <img
      alt="${logo.alt}"
      class="h-10 w-auto mx-auto sm:mx-0"
      height="40"
      src="${logo.src}"
      width="100"
      loading="lazy"
    />
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
