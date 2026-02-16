function trackClick(eventName, data = {}) {
  console.log("TRACK:", eventName, data);

  // Google Analytics example
  if (window.gtag) {
    gtag("event", eventName, data);
  }

  // Plausible example
  if (window.plausible) {
    plausible(eventName, { props: data });
  }
}
