const hamMenu = document.getElementById("menu");
const navbarNav = document.querySelector(".navbar-nav");
const navs = [...navbarNav.children];
const sendMsgBtn = document.getElementById("send-msg-btn");
const imgCertificates = [...document.querySelectorAll(".certificate img")];

hamMenu.addEventListener("click", (e) => {
  navbarNav.classList.toggle("active");
});

document.body.addEventListener("click", (e) => {
  if (!hamMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

navs.forEach((e) => {
  e.addEventListener("click", (e) => {
    navbarNav.classList.remove("active");
  });
});

imgCertificates.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.add("active");
  });
});
