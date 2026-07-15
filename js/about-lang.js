(function () {
  var root = document.getElementById("about-page");
  if (!root) return;

  var storageKey = "about-lang";
  var buttons = root.querySelectorAll("[data-set-lang]");

  function setLang(lang) {
    if (lang !== "zh" && lang !== "en") lang = "zh";
    root.setAttribute("data-lang", lang);
    buttons.forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-set-lang") === lang);
    });
    try {
      localStorage.setItem(storageKey, lang);
    } catch (e) {}
  }

  var saved = null;
  try {
    saved = localStorage.getItem(storageKey);
  } catch (e) {}
  setLang(saved || "zh");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-set-lang"));
    });
  });
})();
