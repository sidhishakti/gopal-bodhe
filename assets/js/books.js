// File: assets/js/books.js

// ====== CONFIG ======
const WHATSAPP_NUMBER = "+919930027257"; // e.g. 919876543210 (country code + number, no +)
const DEFAULT_CURRENCY = "INR";

const SITE_CONFIG = {
  whatsappNumber: "+919930027257",
  defaultCurrency: "INR",
  instagramUrl: "https://www.instagram.com/siddhishakti_publication?igsh=cmhoY3MxdGtxMmJh"
};


// Author meta for structured data & reuse
const AUTHOR = {
  name: "Gopal Bodhe",
  tagline: "Author of engaging, insightful and thought-provoking books.",
  shortBio:
    "Shri Gopal Bodhe is an author whose work focuses on lived experience, reflection and practical wisdom. Replace this text with an accurate short bio.",
  email: "bodheg@gmail.com" // TODO: replace with real email
};

// ====== BOOK DATA MODEL ======
// Add/modify books here. This is your single source of truth.
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
      "Namaste, I would like to order the book \"Sample Book One\" by Shri Gopal Bodhe. Please share payment and shipping details."
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
      "Namaste, I am interested in buying \"Sample Book Two\" by Shri Gopal Bodhe. Please share payment and shipping details."
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
      "Namaste, I am interested in buying \"Sample Book Two\" by Shri Gopal Bodhe. Please share payment and shipping details."
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
      "Namaste, I am interested in buying \"Sample Book Two\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 5,
    title: "Lakshadeep",
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
      "Namaste, I am interested in buying \"Sample Book Two\" by Shri Gopal Bodhe. Please share payment and shipping details."
  },
  {
    id: 6,
    title: "Lighthouse",
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
      "Namaste, I am interested in buying \"Sample Book Two\" by Shri Gopal Bodhe. Please share payment and shipping details."
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
      "Namaste, I am interested in buying \"Sample Book Two\" by Shri Gopal Bodhe. Please share payment and shipping details."
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
      "Namaste, I am interested in buying \"Sample Book Two\" by Shri Gopal Bodhe. Please share payment and shipping details."
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

// ====== RENDERING FUNCTIONS ======

function renderFeaturedBooks() {
  const container = document.getElementById("featured-books");
  if (!container) return;

  const activeBooks = BOOKS.filter((b) => b.isActive).slice(0, 3); // top 3
  container.innerHTML = activeBooks
    .map(
      (book) => `
    <article class="book-card">
      <img src="${book.coverImage}" alt="${book.title} cover" class="book-cover" loading="lazy" />
      <div class="book-info">
        <h3>${book.title}</h3>
        ${book.subtitle ? `<p class="book-subtitle">${book.subtitle}</p>` : ""}
        <p class="book-desc">${book.description}</p>
        <p class="book-meta">
          <span>${book.format}</span> · 
          <span>${book.language}</span> · 
          <span>${book.pages} pages</span>
        </p>
        ${book.price ? `<p class="book-price">${book.currency} ${book.price}</p>` : ""}
        <div class="book-actions">
          <a href="${getWhatsAppLinkForBook(book)}" target="_blank" class="btn btn-primary">
            Order via WhatsApp
          </a>
          <a href="books.html#${book.slug}" class="btn btn-secondary">
            View Details
          </a>
          ${book.externalPurchaseLink
          ? `
            <a href="${book.externalPurchaseLink}" target="_blank" class="btn btn-outline">
              Buy Online
            </a>`
          : ""
        }
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

function renderAllBooks() {
  const container = document.getElementById("all-books");
  if (!container) return;

  const activeBooks = BOOKS.filter((b) => b.isActive);
  container.innerHTML = activeBooks
    .map(
      (book) => `
    <article class="book-card" id="${book.slug}">
      <img src="${book.coverImage}" alt="${book.title} cover" class="book-cover" loading="lazy" />
      <div class="book-info">
        <h2>${book.title}</h2>
        ${book.subtitle ? `<p class="book-subtitle">${book.subtitle}</p>` : ""}
        <p class="book-desc">${book.description}</p>
        <dl class="book-details">
          <div><dt>ISBN</dt><dd>${book.isbn || "-"}</dd></div>
          <div><dt>Publisher</dt><dd>${book.publisher || "-"}</dd></div>
          <div><dt>Year</dt><dd>${book.publicationYear || "-"}</dd></div>
          <div><dt>Format</dt><dd>${book.format || "-"}</dd></div>
          <div><dt>Pages</dt><dd>${book.pages || "-"}</dd></div>
          <div><dt>Language</dt><dd>${book.language || "-"}</dd></div>
          ${book.price
          ? `<div><dt>Price</dt><dd>${book.currency} ${book.price}</dd></div>`
          : ""
        }
        </dl>
        <div class="book-actions">
          <a href="${getWhatsAppLinkForBook(book)}" target="_blank" class="btn btn-primary">
            Order via WhatsApp
          </a>
          ${book.externalPurchaseLink
          ? `
            <a href="${book.externalPurchaseLink}" target="_blank" class="btn btn-secondary">
              Buy Online
            </a>`
          : ""
        }
          <a href="${getGlobalWhatsAppLink()}" target="_blank" class="btn btn-outline">
            General Enquiry
          </a>
        </div>
      </div>
    </article>
  `
    )
    .join("");
}

// Floating WhatsApp button
function setupFloatingWhatsApp() {
  const btn = document.getElementById("floating-whatsapp");
  if (!btn) return;
  btn.href = getGlobalWhatsAppLink();
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

function setupInstagramLinks() {
  if (!SITE_CONFIG.instagramUrl) return;
  const links = document.querySelectorAll('[data-instagram-link="true"]');
  links.forEach((el) => {
    el.href = SITE_CONFIG.instagramUrl;
  });
}


document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedBooks();
  renderAllBooks();
  setupFloatingWhatsApp();
  setupInstagramLinks(); 
  injectAuthorStructuredData();
});
