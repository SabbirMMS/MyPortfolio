window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// Add this script to your website after the closing body tag
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a");
  let topOffset = 120; // Adjust for larger screens

  const adjustOffsetForSmallScreens = () => {
    if (window.innerWidth <= 700) {
      topOffset = 80; // Adjust for smaller screens (700px max-width)
    } else {
      topOffset = 40; // Reset for larger screens
    }
  };

  adjustOffsetForSmallScreens();
  window.addEventListener("resize", adjustOffsetForSmallScreens); // Update offset on resize

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetSection = document.querySelector(this.hash);
      if (targetSection) {
        const adjustedY = targetSection.offsetTop - topOffset;
        window.scrollTo({ top: adjustedY, behavior: "smooth" });
      }
    });
  });
});

window.addEventListener('scroll', function() {
  const scrolled = window.scrollY > 100; // Show after scrolling 100px
  document.body.classList.toggle('scrolled', scrolled);
});