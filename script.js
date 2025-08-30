// Run everything after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  // Elements to reveal on scroll
  const reveals = document.querySelectorAll("section, .card, .price-card, blockquote, .feature-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");

        // Bounce icon animation for feature cards
        if (entry.target.classList.contains("feature-card")) {
          const icon = entry.target.querySelector(".icon");
          if (icon) {
            icon.classList.add("show");
          }
        }
      }
    });
  }, { threshold: 0.15 });

  reveals.forEach(el => observer.observe(el));

  // Hero text animation
  const heroText = document.querySelector(".hero h1");
  if (heroText) {
    heroText.style.opacity = "0";
    heroText.style.transform = "translateY(30px)";

    setTimeout(() => {
      heroText.style.transition = "all 1s ease";
      heroText.style.opacity = "1";
      heroText.style.transform = "translateY(0)";
    }, 300);
  }

  // Parallax effect for hero background
  const hero = document.querySelector(".hero");
  if (hero) {
    window.addEventListener("scroll", () => {
      let offset = window.scrollY * 0.3;
      hero.style.backgroundPosition = `center ${offset}px`;
    });
  }
});

// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Close nav when clicking a link
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}
