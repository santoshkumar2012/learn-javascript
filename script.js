 // Get the button
const toTopBtn = document.getElementById("toTopBtn");

// Show button after scrolling 100px
window.onscroll = () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

// Scroll to top when clicked
toTopBtn.onclick = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
