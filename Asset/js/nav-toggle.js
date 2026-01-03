(function () {
  "use strict";
  var btn = document.querySelector(".nav-toggle");
  if (!btn) return;

  function isOpen() {
    return document.body.classList.contains("nav-open");
  }

  function open() {
    document.body.classList.add("nav-open");
    btn.setAttribute("aria-expanded", "true");
  }

  function close() {
    document.body.classList.remove("nav-open");
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    (isOpen() ? close : open)();
  });

  document.addEventListener("click", function (e) {
    if (!isOpen()) return;
    if (e.target.closest(".main-nav") || e.target.closest(".nav-toggle"))
      return;
    close();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 900) close();
  });
})();
