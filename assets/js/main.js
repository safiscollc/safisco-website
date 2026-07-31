document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
      });
    });
  }

  // Gallery lightbox
  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    document.querySelectorAll("[data-lightbox]").forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();
        lightboxImg.src = trigger.getAttribute("href");
        lightboxImg.alt = trigger.querySelector("img") ? trigger.querySelector("img").alt : "";
        lightbox.classList.add("open");
      });
    });
    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox || e.target.classList.contains("lightbox-close")) {
        lightbox.classList.remove("open");
        lightboxImg.src = "";
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        lightbox.classList.remove("open");
        lightboxImg.src = "";
      }
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
});
