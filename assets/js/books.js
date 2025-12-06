// File: assets/js/books.js

// ====== GLOBAL CONFIG ======
const SITE_CONFIG = {
  // NOTE: WhatsApp format should ideally be country-code + number with NO '+' for wa.me.
  // If your current value works for you, you can keep it, but recommended: "96877248284"
  whatsappNumber: "+96877248284",

  // Default currency used when book.currency is missing
  defaultCurrency: "INR",

  // Instagram profile URL
  instagramUrl: "https://www.instagram.com/siddhishakti_publication?igsh=cmhoY3MxdGtxMmJh"
};

// Backwards-compatible constants (if any code still uses them)
const WHATSAPP_NUMBER = SITE_CONFIG.whatsappNumber;
const DEFAULT_CURRENCY = SITE_CONFIG.defaultCurrency;

// ====== AUTHOR METADATA ======
const AUTHOR = {
  name: "Gopal Bodhe",
  tagline: "Author, photographer, and pioneer of aerial imagery in India.",
  shortBio:
    "Gopal Bodhe is a photographer, author and former Indian Navy officer known for pioneering aerial photography in India. He has documented thousands of kilometres of coastline and heritage sites from the air and authored multiple books on Goa, Mumbai, Maharashtra and forts from a bird’s eye view.",
  email: "bodheg@gmail.com" // if you want to use the real email
};

// ====== BOOK DATA MODEL ======
// IMPORTANT:
// Keep your existing BOOKS array here – just paste it into this array body,
// do NOT change your titles, images, prices, etc.
const BOOKS = [

  {
    id: 1,
    title: "A Trade route",
    slug: "sample-book-one", // used for deep-links (#sample-book-one)
    subtitle: "Replace with real title and subtitle",
    description:
      "This is placeholder text for one of the books by Shri Gopal Bodhe. Replace with a 2–3 line description.",
    coverImage: "assets/images/books/a-trade-route.jpg",
    price: 399,
    currency: DEFAULT_CURRENCY,
    isbn: "978-1-23456-789-0",
    publisher: "Publisher Name",
    publicationYear: 2022,
    pages: 240,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "", // e.g. Amazon / Flipkart / Razorpay link if available
    whatsappMessageTemplate:
      "Namaste, I would like to order the book \"A Trade route\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 2,
    title: "Mumbai Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/mumbai.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Mumbai Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 3,
    title: "Fort Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/fort-book.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Fort Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 4,
    title: "GOA Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/goa.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"GOA Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 5,
    title: "Lakshadeep Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/lakshadeep.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Lakshadeep Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 6,
    title: "Lighthouse Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/lighthouse.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Lighthouse Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 7,
    title: "Maharashtra Book",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/maharashtra.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Maharashtra Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 8,
    title: "Sidhivinayak",
    slug: "sample-book-two",
    subtitle: "",
    description:
      "Another placeholder entry. Add the real book name, theme, and a short blurb here.",
    coverImage: "assets/images/books/sidhivinayak.jpg",
    price: 299,
    currency: DEFAULT_CURRENCY,
    isbn: "",
    publisher: "",
    publicationYear: 2020,
    pages: 180,
    language: "Marathi",
    format: "Paperback",
    tags: ["sample"],
    isActive: true,
    externalPurchaseLink: "",
    whatsappMessageTemplate:
      "Namaste, I am interested in buying \"Sidhivinayak Book\" by Shri Gopal Bodhe. Please share payment and shipping details."
  }
  // TODO: Add real books 3–9 here following the same structure
];

// ====== HELPERS ======

function getWhatsAppLinkForBook(book) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text =
    book.whatsappMessageTemplate ||
    `Namaste, I would like to order the book "${book.title}" by Shri Gopal Bodhe. Please share payment and shipping details.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

function getGlobalWhatsAppLink() {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  const text = "Namaste, I am interested in the books of Shri Gopal Bodhe.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

// Unified card renderer so we don’t duplicate HTML in two functions
function renderBookCard(book, { featured = false } = {}) {
  const hasPrice = !!book.price;
  const currency = book.currency || DEFAULT_CURRENCY;
  const subtitleHtml = book.subtitle
    ? `<p class="book-subtitle">${book.subtitle}</p>`
    : "";
  const priceHtml = hasPrice
    ? `<p class="book-price">${currency} ${book.price}</p>`
    : "";

  const metaHtml = `
    <p class="book-meta">
      <span>${book.format || "-"}</span> · 
      <span>${book.language || "-"}</span> · 
      <span>${book.pages || "-"} pages</span>
    </p>
  `;

  const detailsHtml = `
    <dl class="book-details">
      <div><dt>ISBN</dt><dd>${book.isbn || "-"}</dd></div>
      <div><dt>Publisher</dt><dd>${book.publisher || "-"}</dd></div>
      <div><dt>Year</dt><dd>${book.publicationYear || "-"}</dd></div>
      <div><dt>Format</dt><dd>${book.format || "-"}</dd></div>
      <div><dt>Pages</dt><dd>${book.pages || "-"}</dd></div>
      <div><dt>Language</dt><dd>${book.language || "-"}</dd></div>
      ${
        hasPrice
          ? `<div><dt>Price</dt><dd>${currency} ${book.price}</dd></div>`
          : ""
      }
    </dl>
  `;

  const titleTag = featured ? "h3" : "h2";
  const detailsBlock = featured ? metaHtml : detailsHtml;
  const idAttr = featured ? "" : `id="${book.slug}"`;

  return `
    <article class="book-card" ${idAttr}>
      <img src="${book.coverImage}" alt="${book.title} cover" class="book-cover" loading="lazy" />
      <div class="book-info">
        <${titleTag}>${book.title}</${titleTag}>
        ${subtitleHtml}
        <p class="book-desc">${book.description || ""}</p>
        ${detailsBlock}
        ${priceHtml}
        <div class="book-actions">
          <a href="${getWhatsAppLinkForBook(book)}" target="_blank" class="btn btn-primary">
            Order via WhatsApp
          </a>
          ${
            !featured
              ? `
          <a href="${getGlobalWhatsAppLink()}" target="_blank" class="btn btn-outline">
            General Enquiry
          </a>
          `
              : `
          <a href="books.html#${book.slug}" class="btn btn-secondary">
            View Details
          </a>
          `
          }
          ${
            book.externalPurchaseLink
              ? `
          <a href="${book.externalPurchaseLink}" target="_blank" class="btn btn-outline">
            Buy Online
          </a>
          `
              : ""
          }
        </div>
      </div>
    </article>
  `;
}

// ====== RENDERING FUNCTIONS ======

function renderFeaturedBooks() {
  const container = document.getElementById("featured-books");
  if (!container) return;

  const activeBooks = BOOKS.filter((b) => b.isActive).slice(0, 3);
  container.innerHTML = activeBooks
    .map((book) => renderBookCard(book, { featured: true }))
    .join("");
}

function renderAllBooks() {
  const container = document.getElementById("all-books");
  if (!container) return;

  const activeBooks = BOOKS.filter((b) => b.isActive);
  container.innerHTML = activeBooks
    .map((book) => renderBookCard(book, { featured: false }))
    .join("");
}

// Floating WhatsApp button
function setupFloatingWhatsApp() {
  const btn = document.getElementById("floating-whatsapp");
  if (!btn) return;
  btn.href = getGlobalWhatsAppLink();
}

// Instagram links (header/footer)
function setupInstagramLinks() {
  if (!SITE_CONFIG.instagramUrl) return;
  const links = document.querySelectorAll('[data-instagram-link="true"]');
  links.forEach((el) => {
    el.href = SITE_CONFIG.instagramUrl;
  });
}

// SEO helpers
function injectAuthorStructuredData() {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR.name,
    description: AUTHOR.shortBio,
    jobTitle: "Author",
    email: AUTHOR.email,
    url: window.location.origin,
    sameAs: SITE_CONFIG.instagramUrl ? [SITE_CONFIG.instagramUrl] : []
  });
  document.head.appendChild(script);
}

// ====== BOOTSTRAP ======

document.addEventListener("DOMContentLoaded", () => {
  // --- Existing site setup ---
  renderFeaturedBooks();
  renderAllBooks();
  setupFloatingWhatsApp();
  setupInstagramLinks();
  injectAuthorStructuredData();

  // --- Mobile Nav Setup ---
  const toggleButton = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("primary-nav"); // Ensure correct ID

  // If nav doesn't exist on this page, skip
  if (!toggleButton || !navLinks) return;

  // Collapse menu *only on mobile*
  if (window.matchMedia("(max-width: 768px)").matches) {
    navLinks.classList.add("nav-links--collapsed");
  }

  toggleButton.addEventListener("click", () => {
    const isCollapsed = navLinks.classList.toggle("nav-links--collapsed");
    toggleButton.setAttribute("aria-expanded", String(!isCollapsed));
  });
});
