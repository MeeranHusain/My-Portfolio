/* Mobile hamburger menu */
(function () {
  var b = document.getElementById("burger"),
    m = document.getElementById("menu");
  if (!b || !m) return;
  function set(o) {
    m.classList.toggle("open", o);
    b.setAttribute("aria-expanded", o ? "true" : "false");
    b.setAttribute("aria-label", o ? "Close menu" : "Open menu");
  }
  b.addEventListener("click", function () {
    set(!m.classList.contains("open"));
  });
  m.addEventListener("click", function (e) {
    if (e.target.closest("a")) set(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") set(false);
  });
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".nav")) set(false);
  });
  matchMedia("(min-width:721px)").addEventListener("change", function (e) {
    if (e.matches) set(false);
  });
})();
