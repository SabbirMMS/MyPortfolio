// Sticky Window for nav manus
window.addEventListener("scroll", function () {
  var nav = document.querySelector("nav");
  if (window.scrollY > 0) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});

// For anchor smooth scrolling
document.addEventListener("DOMContentLoaded", function () {
  // Process1
  // const links = document.querySelectorAll("nav a");
  // Process2
  //const topLink = document.querySelector("a.absCorner[href='#top']");
  //Process3
  const linksToSmoothScroll = [
    "nav a",
    "a.absCorner[href='#top']",
    ".options a[href='#hireMe']",
  ]; // Add more selectors as needed

  let topOffset = 120; // Adjust for larger screens

  const adjustOffsetForSmallScreens = () => {
    if (window.innerWidth <= 700) {
      topOffset = 100; // Adjust for smaller screens (700px max-width)
    } else {
      topOffset = 40; // Reset for larger screens
    }
  };

  adjustOffsetForSmallScreens();
  window.addEventListener("resize", adjustOffsetForSmallScreens); // Update offset on resize

  linksToSmoothScroll.forEach((selector) => {
    const links = document.querySelectorAll(selector);
    links.forEach((link) => {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        const targetSection = this.hash ? document.querySelector(this.hash) : document.getElementById("top"); // Use "this.hash" for anchors within the page, otherwise try "top" ID
        if (targetSection) {
          const adjustedY = targetSection.offsetTop - topOffset;
          window.scrollTo({ top: adjustedY, behavior: "smooth" });
        }
      });
    });
  });
});

// Showing  go to top button fixed bottom right
window.addEventListener('scroll', function() {
  const scrolled = window.scrollY > 100; // Show after scrolling 100px
  document.body.classList.toggle('scrolled', scrolled);
});

