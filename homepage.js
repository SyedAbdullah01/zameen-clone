// =================================================================================
// DATA IMPORT
// =================================================================================
import { pageData } from './data.js';

// =================================================================================
// POPULATION FUNCTIONS
// =================================================================================

function populateNav() {
  const container = document.getElementById('nav-logo-container');
  if (!container) return;
  const { logo } = pageData.nav;
  container.innerHTML = `
    <a class="flex items-center space-x-2" href="#">
      <img alt="${logo.alt}" class="h-10 w-auto" height="40" src="${logo.src}" width="120" />
    </a>
  `;
}

function populateHero() {
  const section = document.getElementById('hero-section');
  if (!section) return;
  const { image, title, titleBold } = pageData.hero;
  section.innerHTML = `
    <img alt="${image.alt}" class="w-full h-full object-cover" height="480" src="${image.src}" width="1920" />
    <div class="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
      <h2 class="text-white text-center text-lg md:text-xl lg:text-2xl font-semibold mb-4 max-w-xl">
        ${title} <span class="font-bold">${titleBold}</span>
      </h2>
      <form aria-label="Property search form" class="bg-white bg-opacity-90 rounded-md p-4 w-full max-w-4xl flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-3">
        <div class="flex flex-col w-full md:w-auto">
          <label class="sr-only" for="buy-rent-project">Buy, Rent or Projects</label>
          <div id="search-toggle" class="flex border border-gray-300 rounded-md overflow-hidden">
            <button data-purpose="BUY" class="flex-1 px-4 py-2 font-semibold text-sm bg-[#2bb54c] text-white">BUY</button>
            <button data-purpose="RENT" class="flex-1 px-4 py-2 font-semibold text-sm bg-white text-gray-700 border-r border-gray-300">RENT</button>
            <button data-purpose="PROJECTS" class="flex-1 px-4 py-2 font-semibold text-sm bg-white text-gray-700">PROJECTS</button>
          </div>
        </div>
        <select id="city" class="w-full p-2 border border-gray-300 rounded text-sm">
          <option value="City">City</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
        </select>
        <select id="location" class="w-full p-2 border border-gray-300 rounded text-sm">
          <option value="Location">Location</option>
          <option value="DHA">DHA</option>
          <option value="Clifton">Clifton</option>
          <option value="Gulshan">Gulshan</option>
          <option value="Bahria Town">Bahria Town</option>
          <option value="Model Town">Model Town</option>
          <option value="F-10">F-10</option>
        </select>
        <select id="property-type" class="w-full p-2 border border-gray-300 rounded text-sm">
          <option value="Homes">Homes</option>
          <option value="Flats">Flats</option>
          <option value="Plots">Plots</option>
        </select>
        <select aria-label="Select Minimum Price" class="border border-gray-300 rounded px-3 py-1 w-full md:w-28" id="min-price" name="min-price">
          <option>Min</option>
          <option>PKR 1 Lakh</option>
          <option>PKR 10 Lakh</option>
          <option>PKR 1 Crore</option>
        </select>
        <select aria-label="Select Maximum Price" class="border border-gray-300 rounded px-3 py-1 w-full md:w-28" id="max-price" name="max-price">
          <option>Max</option>
          <option>PKR 10 Lakh</option>
          <option>PKR 1 Crore</option>
          <option>PKR 10 Crore</option>
        </select>
        <select aria-label="Select Bedrooms" class="border border-gray-300 rounded px-3 py-1 w-full md:w-28" id="bedrooms" name="bedrooms">
          <option>Any</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
        </select>
        <select aria-label="Select Bathrooms" class="border border-gray-300 rounded px-3 py-1 w-full md:w-28" id="bathrooms" name="bathrooms">
          <option>Any</option>
          <option>1+</option>
          <option>2+</option>
          <option>3+</option>
        </select>
        <button class="bg-[#2bb54c] text-white rounded px-6 py-2 font-semibold hover:bg-[#27a143] transition-colors w-full md:w-auto" type="submit">SEARCH</button>
      </form>
    </div>
  `;
}

/**
 * Populates the "Browse Properties" section based on the selected purpose.
 * When 'Rent' is selected, the 'Plots' card is hidden.
 * @param {string} purpose - The selected purpose ('BUY', 'RENT', 'PROJECTS').
 */
function populateBrowseProperties(purpose = 'BUY') {
  const grid = document.getElementById('browse-properties-grid');
  if (!grid) return;

  const cardsData = pageData.browseProperties;

  // Filter cards based on the purpose
  let cardsToShow;
  if (purpose.toUpperCase() === 'RENT') {
    cardsToShow = Object.values(cardsData).filter(card => card.id !== 'plots');
  } else if (purpose.toUpperCase() === 'PROJECTS') {
    cardsToShow = Object.values(cardsData).filter(card => card.id === 'commercial');
  } else {
    cardsToShow = Object.values(cardsData); // Show all for 'BUY'
  }

  // Generate and set the HTML for the filtered cards
  grid.innerHTML = cardsToShow.map(card => {
    const columnsHTML = Object.values(card.columns).map(column => `
      <div>
        <p class="font-semibold text-[#2bb54c]">${column.title}</p>
        <ul class="mt-1 space-y-1">
          ${column.links.map(link => `<li><a class="hover:underline" href="${link.href}">${link.text}</a></li>`).join('')}
        </ul>
      </div>
    `).join('');

    return `
      <div class="border border-gray-200 rounded p-4">
        <div class="flex items-center space-x-2 mb-4">
          <i class="fas ${card.icon} text-[#2bb54c] text-xl"></i>
          <h4 class="font-semibold text-gray-700">${card.title}</h4>
        </div>
        <div class="flex space-x-6 text-sm text-gray-600">
          ${columnsHTML}
        </div>
      </div>
    `;
  }).join('');
}

function populateExploreGrid() {
  const grid = document.getElementById('explore-zameen-grid');
  if (!grid) return;
  grid.innerHTML = pageData.exploreIcons.map(icon => `
    <a class="flex flex-col items-center space-y-2 p-3 rounded border border-gray-200 hover:shadow-md" href="#">
      <img alt="${icon.alt}" class="w-10 h-10 rounded" height="40" src="${icon.src}" width="40" loading="lazy" />
      <span>${icon.text}</span>
      <span class="text-gray-500">${icon.subtext}</span>
    </a>
  `).join('');
}

function populateAgenciesGrid() {
  const grid = document.getElementById('titanium-agencies-grid');
  if (!grid) return;
  grid.innerHTML = pageData.agencies.map(agency => `
    <a class="flex items-center justify-center p-2 border border-gray-200 rounded hover:shadow-md" href="#">
      <img alt="${agency.alt}" class="max-h-10 object-contain" height="40" src="${agency.src}" width="100" loading="lazy" />
    </a>
  `).join('');
}

function populateProjectsGrid() {
  const grid = document.getElementById('zameen-projects-grid');
  if (!grid) return;
  grid.innerHTML = pageData.projects.map(project => `
    <a class="border border-gray-300 rounded bg-white shadow-sm overflow-hidden block hover:shadow-md transition-shadow" href="property-details.html" tabindex="0">
      <div class="relative">
        <img alt="${project.alt}" class="w-full h-48 object-cover" height="300" src="${project.src}" width="600" loading="lazy" />
        <span class="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold uppercase px-2 py-0.5 rounded">HOT</span>
      </div>
      <div class="p-4">
        <p class="text-sm font-semibold text-gray-900 mb-1">${project.price}</p>
        <p class="text-xs text-gray-600 mb-1">${project.location}</p>
        <p class="text-xs text-gray-600 mb-1">${project.type}</p>
        <p class="text-xs text-gray-600">${project.size}</p>
      </div>
    </a>
  `).join('');
}


function populatePartners() {
  const container = document.getElementById('home-partners-container');
  if (!container) return;
  const { logo } = pageData.partners;
  container.innerHTML = `
    <img alt="${logo.alt}" class="object-contain max-h-16" height="60" src="${logo.src}" width="200" loading="lazy" />
  `;
}

// =================================================================================
// INITIALIZATION & EVENT LISTENERS
// =================================================================================

function initializePageContent() {
  populateNav();
  populateHero();
  populateBrowseProperties(); // Initial population with default 'BUY'
  populateExploreGrid();
  populateAgenciesGrid();
  populateProjectsGrid();
  populateGetAppSection();
  populatePartners();
}

// Homepage Search Form Handling
const searchForm = document.querySelector('form[aria-label="Property search form"]');
const searchButtons = document.querySelectorAll('#search-toggle button');
const citySelect = document.getElementById('city');
const locationSelect = document.getElementById('location');
const propertyTypeSelect = document.getElementById('property-type');
const minPriceSelect = document.getElementById('min-price');
const maxPriceSelect = document.getElementById('max-price');
const bedroomsSelect = document.getElementById('bedrooms');
const bathroomsSelect = document.getElementById('bathrooms');

let currentPurpose = 'BUY';

if (searchForm) {
  searchButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Reset styles for all buttons
      searchButtons.forEach(btn => {
        btn.classList.remove('bg-[#2bb54c]', 'text-white');
        btn.classList.add('bg-white', 'text-gray-700', 'border-r', 'border-gray-300');
      });
      // Apply active style to the clicked button
      button.classList.remove('bg-white', 'text-gray-700', 'border-r', 'border-gray-300');
      button.classList.add('bg-[#2bb54c]', 'text-white');

      currentPurpose = button.getAttribute('data-purpose');

      // Dynamically update the Browse Properties section
      populateBrowseProperties(currentPurpose);
    });
  });

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchCriteria = {
      purpose: currentPurpose || 'BUY',
      city: citySelect.value === 'City' ? '' : citySelect.value,
      location: locationSelect.value === 'Location' ? '' : locationSelect.value,
      propertyType: propertyTypeSelect.value === 'Homes' ? 'House' : propertyTypeSelect.value,
      minPrice: minPriceSelect.value === 'Min' ? '' : minPriceSelect.value,
      maxPrice: maxPriceSelect.value === 'Max' ? '' : maxPriceSelect.value,
      bedrooms: bedroomsSelect.value === 'Any' ? '' : bedroomsSelect.value,
      bathrooms: bathroomsSelect.value === 'Any' ? '' : bathroomsSelect.value,
    };

    // Add to recent searches
    recentSearches.unshift({
      type: searchCriteria.propertyType || 'Homes',
      purpose: searchCriteria.purpose,
      city: searchCriteria.city || 'City',
      location: searchCriteria.location || 'Location',
      area: 'N/A',
    });

    if (recentSearches.length > 4) recentSearches.pop();

    // Save search criteria to localStorage
    localStorage.setItem('searchCriteria', JSON.stringify(searchCriteria));
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches)); // Save recent searches

    // Redirect to results page
    window.location.href = 'results.html';
  });
}

// Update Recent Searches Section (Homepage)
let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];

function updateRecentSearches() {
  const recentSearchesSection = document.querySelector('.flex.flex-col.sm\\:flex-row.gap-6');
  if (recentSearchesSection && recentSearches.length > 0) {
    recentSearchesSection.innerHTML = recentSearches.map(search => `
      <div class="border border-gray-200 rounded p-4 flex-1">
        <h4 class="text-[#2bb54c] font-semibold mb-2">${search.type} for ${search.purpose}</h4>
        <p class="text-xs text-gray-600 mb-1">${search.city}</p>
        <p class="text-xs text-gray-600 mb-1">${search.location}</p>
        <p class="text-xs text-gray-600">${search.area}</p>
      </div>
    `).join('');
  }
}

// Mobile Menu Toggle (Homepage and Results)
const mobileMenuButton = document.querySelector('nav button[aria-label="User menu"]');
const navMenu = document.querySelector('nav ul');

if (mobileMenuButton && navMenu) {
  mobileMenuButton.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
    navMenu.classList.toggle('flex');
    navMenu.classList.toggle('flex-col');
    navMenu.classList.toggle('absolute');
    navMenu.classList.toggle('top-16');
    navMenu.classList.toggle('bg-white');
    navMenu.classList.toggle('w-full');
    navMenu.classList.toggle('p-4');
  });
}

// Back to Top Button (Homepage and Results)
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.remove('hidden');
    } else {
      backToTopBtn.classList.add('hidden');
    }
  });
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Initialize Sections on Homepage Load
if (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/')) {
  initializePageContent();
  updateRecentSearches();
}