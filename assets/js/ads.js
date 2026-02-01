// File: assets/js/ads.js

// ====== EVENT / ADVERTISEMENT BANNERS ======
// Config-driven promos for seminars/events.
// - Date-aware (start/end)
// - Dismissible (localStorage)
// - Safe no-op on pages where it isn't needed

(function () {
  "use strict";

  // --- CONFIG ---
  // Dates are in YYYY-MM-DD (local time). Keep endDate inclusive.
  // If you don’t have an event right now, set enabled:false.
  const ADS = [
    {
      id: "seminar-2026-02",
      enabled: true,
      startDate: "2026-01-01",
      endDate: "2026-02-15",
      message: "UNESCO Forts of Swarajya - Exhibition, Woodlam Park School, Al-Nadha, Dubai",
      meta: "Saturday 14th February, 2026",
      ctaText: "Register",
      // Tip: you can use WhatsApp link (wa.me) OR a Google Form.
      ctaHref: "#whatsapp",

      whatsapp: {
        phone: "+919930027257",   // country code + number, no +
        text: "Hi, I want to register for the *UNESCO Forts of Swarajya - Exhibition* on 14 Feb 2026 in Woodlam Park School, Al-Nadha, Dubai."
      }
    }
  ];

  // --- HELPERS ---
  function pad2(n) {
    return String(n).padStart(2, "0");
  }

  function todayYMD() {
    const d = new Date();
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  function isWithinRange(ymd, start, end) {
    // String compare works for YYYY-MM-DD
    if (start && ymd < start) return false;
    if (end && ymd > end) return false;
    return true;
  }

  function storageKey(id) {
    return `ad_dismissed:${id}`;
  }

  function isDismissed(id) {
    try {
      return localStorage.getItem(storageKey(id)) === "1";
    } catch (_) {
      return false;
    }
  }

  function setDismissed(id) {
    try {
      localStorage.setItem(storageKey(id), "1");
    } catch (_) {
      // ignore
    }
  }

  function buildWhatsAppLink(phone, text) {
    const digits = String(phone || "").trim().replace(/^\+/, "");
    const msg = encodeURIComponent(text || "Hi, I want to register for the seminar.");
    return `https://wa.me/${digits}?text=${msg}`;
  }

  function resolveHref(ad) {
    if (ad.ctaHref === "#whatsapp") {
      // 1) Prefer per-ad WhatsApp config (event-specific message)
      if (ad.whatsapp && ad.whatsapp.phone) {
        return buildWhatsAppLink(ad.whatsapp.phone, ad.whatsapp.text);
      }

      // 2) Fallback to global WhatsApp link (site default)
      if (typeof window.getGlobalWhatsAppLink === "function") {
        return window.getGlobalWhatsAppLink();
      }

      // 3) Last fallback: use SITE_CONFIG number if present
      const num = window.SITE_CONFIG && window.SITE_CONFIG.whatsappNumber;
      if (num) return buildWhatsAppLink(num, "Hi, I want to register for the seminar.");
    }

    return ad.ctaHref || "#";
  }

  function buildBar(ad) {
    const bar = document.createElement("div");
    bar.className = "announce-bar";
    bar.setAttribute("role", "region");
    bar.setAttribute("aria-label", "Announcement");

    const inner = document.createElement("div");
    inner.className = "announce-inner";

    const textWrap = document.createElement("div");
    textWrap.className = "announce-text";

    const msg = document.createElement("span");
    msg.className = "announce-message";
    msg.textContent = ad.message || "";

    textWrap.appendChild(msg);

    if (ad.meta) {
      const meta = document.createElement("span");
      meta.className = "announce-meta";
      meta.textContent = ` ${ad.meta}`;
      textWrap.appendChild(meta);
    }

    const actions = document.createElement("div");
    actions.className = "announce-actions";

    const cta = document.createElement("a");
    cta.className = "announce-cta";
    cta.href = resolveHref(ad);
    cta.textContent = ad.ctaText || "Learn more";
    cta.rel = "noopener";
    if (cta.href && /^https?:\/\//.test(cta.href)) cta.target = "_blank";

    const close = document.createElement("button");
    close.className = "announce-close";
    close.type = "button";
    close.setAttribute("aria-label", "Dismiss announcement");
    close.innerHTML = "&times;";

    close.addEventListener("click", () => {
      setDismissed(ad.id);
      bar.remove();
    });

    actions.appendChild(cta);
    actions.appendChild(close);

    inner.appendChild(textWrap);
    inner.appendChild(actions);
    bar.appendChild(inner);
    return bar;
  }

  function pickActiveAd() {
    const ymd = todayYMD();
    return (
      ADS.find((ad) => ad && ad.enabled && ad.id && !isDismissed(ad.id) && isWithinRange(ymd, ad.startDate, ad.endDate)) ||
      null
    );
  }

  function mount() {
    const ad = pickActiveAd();
    if (!ad) return;

    // Avoid double-insertion
    if (document.querySelector(".announce-bar")) return;

    const bar = buildBar(ad);

    // If the page has an explicit slot, use it. Else, stick it on top of <body>.
    const slot = document.querySelector('[data-ad-slot="top"]');
    if (slot) {
      slot.appendChild(bar);
    } else {
      document.body.prepend(bar);
    }
  }

  document.addEventListener("DOMContentLoaded", mount);
})();
