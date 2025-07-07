// Mobile menu
const toggleBtn = document.getElementById("toggleMenu");
const burgerIcon = document.getElementById("burgerIcon");
const mobileMenu = document.getElementById("mobileMenu");
const internalClose = document.getElementById("internalCloseIcon");

// open menu
toggleBtn.addEventListener("click", () => {
  mobileMenu.classList.add("show");
  document.body.classList.add("no-scroll");
});

// X close
internalClose.addEventListener("click", () => {
  mobileMenu.classList.remove("show");
  document.body.classList.remove("no-scroll");
});

// li close on click
document.querySelectorAll("#mobileMenu li a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("no-scroll");
  });
});
// remove no-scroll if screen becomes large
window.addEventListener("resize", () => {
  if (window.innerWidth > 1024 && mobileMenu.classList.contains("show")) {
    mobileMenu.classList.remove("show");
    document.body.classList.remove("no-scroll");
  }
});

// input search
// const searchLogo = document.querySelector("#navList #searchLogo");
// const searchWrapper = document.getElementById("desktopSearchWrapper");
// const closeSearchBtn = document.getElementById("closeSearchBtn");

// searchLogo?.addEventListener("click", () => {
//   searchWrapper.classList.remove("hidden");
//   searchWrapper.classList.add("show-search");
//   document.body.classList.add("no-scroll");
// });

// closeSearchBtn?.addEventListener("click", () => {
//   searchWrapper.classList.remove("show-search");
//   searchWrapper.classList.add("hidden");
//   document.body.classList.remove("no-scroll");
// });
