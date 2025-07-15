// =================================================================================
// DATA FOR DYNAMIC CONTENT
// This data will be used across multiple HTML files.
// =================================================================================

export const pageData = {
  nav: {
    logo: {
      src: 'assets/icons/logo.png',
      alt: 'Zameen logo in green background with white text'
    }
  },
  hero: {
    image: {
      src: 'assets/images/hero/karachi-skyline.jpg',
      alt: 'Karachi city skyline with waterfront and modern buildings in background'
    },
    title: 'Search properties for sale in',
    titleBold: 'Pakistan'
  },
  browseProperties: {
    homes: {
      id: 'homes',
      icon: 'fa-home',
      title: 'Homes',
      columns: {
        popular: {
          title: 'Popular',
          links: [
            { text: '5 Marla Houses', href: '#' },
            { text: '10 Marla Houses', href: '#' },
            { text: '1 Kanal Houses', href: '#' },
          ]
        },
        type: {
          title: 'Type',
          links: [
            { text: 'Houses', href: '#' },
            { text: 'Flats', href: '#' },
            { text: 'Upper Portion', href: '#' },
          ]
        },
        areaSize: {
          title: 'Area Size',
          links: [
            { text: '5 Marla', href: '#' },
            { text: '10 Marla', href: '#' },
            { text: '1 Kanal', href: '#' },
          ]
        }
      }
    },
    plots: {
      id: 'plots',
      icon: 'fa-map-marker-alt',
      title: 'Plots',
      columns: {
        popular: {
          title: 'Popular',
          links: [
            { text: '5 Marla', href: '#' },
            { text: '10 Marla', href: '#' },
            { text: '1 Kanal', href: '#' },
          ]
        },
        type: {
          title: 'Type',
          links: [
            { text: 'Residential', href: '#' },
            { text: 'Commercial', href: '#' },
            { text: 'Agricultural', href: '#' },
          ]
        },
        areaSize: {
          title: 'Area Size',
          links: [
            { text: '5 Marla', href: '#' },
            { text: '10 Marla', href: '#' },
            { text: '1 Kanal', href: '#' },
          ]
        }
      }
    },
    commercial: {
      id: 'commercial',
      icon: 'fa-building',
      title: 'Commercial',
      columns: {
        popular: {
          title: 'Popular',
          links: [
            { text: 'Small Shops', href: '#' },
            { text: 'New Projects', href: '#' },
            { text: 'Offices', href: '#' },
          ]
        },
        type: {
          title: 'Type',
          links: [
            { text: 'Shops', href: '#' },
            { text: 'Offices', href: '#' },
            { text: 'Warehouses', href: '#' },
          ]
        },
        areaSize: {
          title: 'Area Size',
          links: [
            { text: 'Small', href: '#' },
            { text: 'Medium', href: '#' },
            { text: 'Large', href: '#' },
          ]
        }
      }
    }
  },
  exploreIcons: [
    {
      src: 'assets/images/explore-icons/new-projects-icon.jpg',
      alt: 'Icon representing New Projects with yellow background and NP text',
      text: 'New Projects',
      subtext: 'Explore new opportunities'
    },
    {
      src: 'assets/images/explore-icons/construction-cost-icon.jpg',
      alt: 'Icon representing Construction Cost Calculator with blue background and CC text',
      text: 'Construction Cost Calculator',
      subtext: 'Estimate your costs'
    },
    {
      src: 'assets/images/explore-icons/home-loan-icon.jpg',
      alt: 'Icon representing Home Loan Calculator with green background and HL text',
      text: 'Home Loan Calculator',
      subtext: 'Calculate your loan eligibility'
    },
    {
      src: 'assets/images/explore-icons/area-guides-icon.jpg',
      alt: 'Icon representing Area Guides with red background and AG text',
      text: 'Area Guides',
      subtext: 'Explore locations in Pakistan'
    },
    {
      src: 'assets/images/explore-icons/plot-finder-icon.jpg',
      alt: 'Icon representing Plot Finder with light green background and PF text',
      text: 'Plot Finder',
      subtext: 'Find your perfect plot'
    },
    {
      src: 'assets/images/explore-icons/property-index-icon.jpg',
      alt: 'Icon representing Property Index with purple background and PI text',
      text: 'Property Index',
      subtext: 'Track property prices'
    },
    {
      src: 'assets/images/explore-icons/area-unit-converter-icon.jpg',
      alt: 'Icon representing Area Unit Converter with teal background and AU text',
      text: 'Area Unit Converter',
      subtext: 'Convert area units'
    },
    {
      src: 'assets/images/explore-icons/property-trends-icon.jpg',
      alt: 'Icon representing Property Trends with violet background and PT text',
      text: 'Property Trends',
      subtext: 'Analyze market trends'
    },
  ],
  agencies: [
    {
      src: 'assets/images/agency-logos/zameeka-estate-logo.jp.webp',
      alt: 'Zameeka Estate logo with black text on white background'
    },
    {
      src: 'assets/images/agency-logos/sherwood-business-logo.jpg',
      alt: 'Sherwood Business Solutions logo with black text on white background'
    },
    {
      src: 'assets/images/agency-logos/chohan-key-estate-logo.jpg',
      alt: 'Chohan Key Estate logo with black text on white background'
    },
    {
      src: 'assets/images/agency-logos/aw-enterprises-logo.jpg',
      alt: 'AW Enterprises logo with white text on black background'
    },
    {
      src: 'assets/images/agency-logos/al-razaq-real-estate-logo.jpg',
      alt: 'Al Razaq Real Estate logo with black text on white background'
    },
    {
      src: 'assets/images/agency-logos/tameer-estate-logo.jpg',
      alt: 'Tameer Estate logo with black text on white background'
    },
    {
      src: 'assets/images/agency-logos/bright-homes-realty-logo.jpg',
      alt: 'Bright Homes Luxury Realty logo with black text on white background'
    },
    {
      src: 'assets/images/agency-logos/odig-associates-logo.jpg',
      alt: 'Odig Associates logo with white text on black background'
    },
  ],
  projects: [
    {
      src: 'assets/images/projects/pine-city-villa.jpg',
      alt: 'Luxury villa exterior with pool and garden',
      price: 'PKR 6.75 Lakh to 2.29 Crore',
      location: 'Pine City Phase 2, Haripur',
      type: 'Residential Plots',
      size: '4500 sqft to 3000 sqft'
    },
    {
      src: 'assets/images/projects/boulevard-heights.jpg',
      alt: 'Modern apartment building exterior in urban area',
      price: 'PKR 3.5 Lakh to 2.22 Crore',
      location: 'Boulevard Heights, Multan',
      type: 'Flats, Shops',
      size: '31.5k sqft to 1.2 Lakh sqft'
    },
    {
      src: 'assets/images/projects/dha-phase-8.jpg',
      alt: 'Large residential development with roads and houses',
      price: 'PKR 3.5 Lakh to 2.22 Crore',
      location: 'DHA Phase 8, Lahore',
      type: 'Commercial Plots, Residential Plots',
      size: '675 sqft to 2700 sqft'
    },
  ],
  app: {
    title: 'Get the Zameen App',
    description: 'Buy and Rent Property faster and better using our app.',
    badges: [
      {
        alt: 'Apple App Store badge',
        src: 'assets/images/app/app-store-badge.jpg',
        href: '#',
        ariaLabel: 'Download on the Apple App Store',
      },
      {
        alt: 'Google Play Store badge',
        src: 'assets/images/app/google-play-badge.jpg',
        href: '#',
        ariaLabel: 'Download on the Google Play Store',
      },
      {
        alt: 'Huawei AppGallery badge',
        src: 'assets/images/app/huawei-app-gallery-badge.jpg',
        href: '#',
        ariaLabel: 'Download on the Huawei AppGallery',
      }
    ],
    mainImage: {
      alt: 'Mobile app screenshot showing Zameen app user interface on a smartphone',
      src: 'assets/images/app/zameen-app-screenshot.jpg',
      height: '350',
      width: '175',
      class: 'max-h-[350px] object-contain'
    },
    qrCode: {
      alt: 'QR code to download Zameen app',
      src: 'assets/images/app/qr-code.jpg',
      text: 'Scan the QR code to get the app',
      height: '112',
      width: '112',
      class: 'w-28 h-28'
    }
  },
  partners: {
    logo: {
      src: 'assets/images/partners/home-partners-logo.jpg',
      alt: 'Logo of Our Home Partners'
    }
  }
};