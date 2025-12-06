# Gopal Bodhe – Static Author Site

This repository contains a simple static website for author **Gopal Bodhe**,
designed to be hosted on **GitHub Pages**.

## Quick setup

1. Replace `USERNAME` in the HTML `<link rel="canonical">` and Open Graph URLs
   with your actual GitHub username once the site is deployed.

2. In `assets/js/books.js`:
   - Set `WHATSAPP_NUMBER` to the real WhatsApp number (country code + number, no `+`).
   - Replace placeholder book entries in `BOOKS` with the real book details
     (title, description, price, ISBN, etc.).
   - Optionally add external purchase links (Amazon / Flipkart / Razorpay, etc.)
     via `externalPurchaseLink`.

3. Replace the placeholder images:
   - `assets/images/bodhe-sir.jpg`
   - `assets/images/books/a-trade-route.jpg`
   - `assets/images/books/fort-book.jpg`
   with real photos / book covers (keep the filenames or update paths in JS).

4. Commit and push to GitHub, then enable GitHub Pages from the repository settings.

## WhatsApp ordering

The site uses WhatsApp click-to-chat links to capture orders with pre-filled
messages. No payment gateway is integrated yet, but you can add external links
per book later without changing the overall structure.
