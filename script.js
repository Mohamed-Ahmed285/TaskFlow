
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});
// Function to check if element is in viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top < (window.innerHeight || document.documentElement.clientHeight) * 0.9
  );
}

// Function to add visible class when element is in viewport
function checkVisibility() {
  const elements = document.querySelectorAll('.feature-card, .testimonial-card, .pricing-card');
  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('visible');
    }
  });
}

window.addEventListener('load', checkVisibility);
window.addEventListener('scroll', checkVisibility);


