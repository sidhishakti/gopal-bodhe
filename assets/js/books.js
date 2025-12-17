// File: assets/js/books.js

// ====== GLOBAL CONFIG ======
const SITE_CONFIG = {
  // NOTE: WhatsApp format should ideally be country-code + number with NO '+' for wa.me.
  // If your current value works for you, you can keep it, but recommended: "96877248284"
  whatsappNumber: "+96877248284",

  // Default currency used when book.currency is missing
  defaultCurrency: "INR",

  // Instagram profile URL
  instagramUrl: "https://www.instagram.com/siddhishakti_publication?igsh=cmhoY3MxdGtxMmJh",

  // Facebook page URL
  facebookUrl: "https://www.facebook.com/your-page-here"
};


// Backwards-compatible constants (if any code still uses them)
const WHATSAPP_NUMBER = SITE_CONFIG.whatsappNumber;
const DEFAULT_CURRENCY = SITE_CONFIG.defaultCurrency;

// wa.me expects digits only (no leading '+'). We keep config flexible and sanitize at runtime.
function normalizeWhatsAppNumber(num) {
  return String(num || "").trim().replace(/^\+/, "");
}

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
  const base = `https://wa.me/${normalizeWhatsAppNumber(WHATSAPP_NUMBER)}`;
  const text =
    book.whatsappMessageTemplate ||
    `Namaste, I would like to order the book "${book.title}" by Shri Gopal Bodhe. Please share payment and shipping details.`;
  return `${base}?text=${encodeURIComponent(text)}`;
}

function getGlobalWhatsAppLink() {
  const base = `https://wa.me/${normalizeWhatsAppNumber(WHATSAPP_NUMBER)}`;
  const text = "Namaste, I am interested in the books of Shri Gopal Bodhe.";
  return `${base}?text=${encodeURIComponent(text)}`;
}

// ====== CATALOG FILTERS + SEARCH (books.html) ======

function normalizeTag(tag) {
  return String(tag || "")
    .trim()
    .toLowerCase();
}

function getAllTags(books) {
  const map = new Map(); // normalized -> display
  books.forEach((b) => {
    const tags = Array.isArray(b.tags) ? b.tags : (b.tags ? [b.tags] : []);
    tags.forEach((t) => {
      const n = normalizeTag(t);
      if (!n) return;
      if (!map.has(n)) map.set(n, String(t).trim());
    });
  });
  return Array.from(map.entries())
    .map(([norm, display]) => ({ norm, display }))
    .sort((a, b) => a.display.localeCompare(b.display));
}

function matchesSearch(book, q) {
  if (!q) return true;
  const tags = Array.isArray(book.tags) ? book.tags : (book.tags ? [book.tags] : []);
  const hay = `${book.title || ""} ${book.subtitle || ""} ${book.description || ""} ${tags.join(" ")}`.toLowerCase();
  return hay.includes(q);
}

function matchesTag(book, activeTagNorm) {
  if (!activeTagNorm || activeTagNorm === "all") return true;
  const tags = Array.isArray(book.tags) ? book.tags : (book.tags ? [book.tags] : []);
  return tags.map(normalizeTag).includes(activeTagNorm);
}

// Unified card renderer so we don’t duplicate HTML in two functions
function renderBookCard(book, { featured = false } = {}) {
  const hasPrice = !!book.price;
  const currency = book.currency || DEFAULT_CURRENCY;
  const subtitleHtml = book.subtitle
    ? `<p class="book-subtitle">${book.subtitle}</p>`
    : "";
  const priceHtml = hasPrice
    //? `<p class="book-price">${currency} ${book.price}</p>`
    ? `<p class="book-price">Book Price On Request</p>`
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

  const filtersEl = document.getElementById("book-filters");
  const searchEl = document.getElementById("book-search-input");

  const activeBooks = BOOKS.filter((b) => b.isActive);

  // If the page doesn't have filter/search controls, just render the list (backwards compatible)
  if (!filtersEl && !searchEl) {
    container.innerHTML = activeBooks
      .map((book) => renderBookCard(book, { featured: false }))
      .join("");
    return;
  }

  // State
  let activeTag = "all"; // normalized tag or "all"
  let searchQ = "";

  // Build filter buttons: required quick filters + any tags present in data
  const quickFilters = [
    { norm: "all", display: "All" },
    { norm: normalizeTag("Coastline"), display: "Coastline" },
    { norm: normalizeTag("Forts & Heritage"), display: "Forts & Heritage" },
    { norm: normalizeTag("Cities"), display: "Cities" },
    { norm: normalizeTag("Islands"), display: "Islands" }
  ];

  const merged = new Map();
  quickFilters.forEach((t) => merged.set(t.norm, t.display));
  getAllTags(activeBooks).forEach((t) => merged.set(t.norm, t.display));

  const filterList = Array.from(merged.entries()).map(([norm, display]) => ({ norm, display }));

  function paintFilters() {
    if (!filtersEl) return;

    filtersEl.innerHTML = filterList
      .map((t) => {
        const isActive = t.norm === activeTag;
        return `<button type="button" class="filter-btn${isActive ? " is-active" : ""}" data-tag="${t.norm}" aria-pressed="${isActive}">${t.display}</button>`;
      })
      .join("");
  }

  function paintGrid() {
    const q = (searchQ || "").trim().toLowerCase();
    const filtered = activeBooks.filter((b) => matchesTag(b, activeTag) && matchesSearch(b, q));

    container.innerHTML = filtered
      .map((book) => renderBookCard(book, { featured: false }))
      .join("");

    if (filtered.length === 0) {
      container.innerHTML = `<div class="empty-state">No books match your filter/search.</div>`;
    }
  }

  // Initial render
  paintFilters();
  paintGrid();

  // Events (bind once per page render)
  if (filtersEl) {
    // Prevent duplicate handlers if renderAllBooks is called more than once
    filtersEl.dataset.bound = filtersEl.dataset.bound || "";
    if (filtersEl.dataset.bound !== "true") {
      filtersEl.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-tag]");
        if (!btn) return;
        activeTag = btn.getAttribute("data-tag") || "all";
        paintFilters();
        paintGrid();
      });
      filtersEl.dataset.bound = "true";
    }
  }

  if (searchEl) {
    searchEl.dataset.bound = searchEl.dataset.bound || "";
    if (searchEl.dataset.bound !== "true") {
      searchEl.addEventListener("input", (e) => {
        searchQ = e.target.value || "";
        paintGrid();
      });
      searchEl.dataset.bound = "true";
    }
  }
}

// Floating WhatsApp button
// Floating social icons (WhatsApp, Instagram, Facebook)
function setupFloatingSocialIcons() {
  const whatsappBtn = document.getElementById("floating-whatsapp");
  const instagramBtn = document.getElementById("floating-instagram");
  const facebookBtn = document.getElementById("floating-facebook");

  // WhatsApp
  if (whatsappBtn && typeof getGlobalWhatsAppLink === "function") {
    whatsappBtn.href = getGlobalWhatsAppLink();
  }

  // Instagram
  if (instagramBtn && SITE_CONFIG.instagramUrl) {
    instagramBtn.href = SITE_CONFIG.instagramUrl;
  }

  // Facebook
  if (facebookBtn && SITE_CONFIG.facebookUrl) {
    facebookBtn.href = SITE_CONFIG.facebookUrl;
  }
}

// Backwards compatibility shim (older code may still call this)
function setupFloatingWhatsApp() {
  setupFloatingSocialIcons();
}


// Instagram links (header/footer)
function setupInstagramLinks() {
  if (!SITE_CONFIG.instagramUrl) return;
  const links = document.querySelectorAll('[data-instagram-link="true"]');
  links.forEach((el) => {
    el.href = SITE_CONFIG.instagramUrl;
  });
}

// Facebook links (header/footer)
function setupFacebookLinks() {
  if (!SITE_CONFIG.facebookUrl) return;
  const links = document.querySelectorAll('[data-facebook-link="true"]');
  links.forEach((el) => {
    el.href = SITE_CONFIG.facebookUrl;
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
  // --- Site content setup ---
  if (typeof renderFeaturedBooks === "function") {
    renderFeaturedBooks();
  }

  if (typeof renderAllBooks === "function") {
    renderAllBooks();
  }

  // Floating social icons
  if (typeof setupFloatingSocialIcons === "function") {
    setupFloatingSocialIcons();
  } else if (typeof setupFloatingWhatsApp === "function") {
    // fallback if only the old function exists
    setupFloatingWhatsApp();
  }

  // Header/footer Instagram links
  if (typeof setupInstagramLinks === "function") {
    setupInstagramLinks();
  }

  // Header/footer Facebook links (if used)
  if (typeof setupFacebookLinks === "function") {
    setupFacebookLinks();
  }

  if (typeof injectAuthorStructuredData === "function") {
    injectAuthorStructuredData();
  }

  // Wire main WhatsApp button (if present)
  const mainBtn = document.getElementById("whatsapp-contact-main");
  if (mainBtn && typeof getGlobalWhatsAppLink === "function") {
    mainBtn.href = getGlobalWhatsAppLink();
  }

  // Footer year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
