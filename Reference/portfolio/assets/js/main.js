/* Portfolio interactions: Harsha Vardhan Basati */
(function () {
  "use strict";

  /* ---- Mobile nav ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ---- Typing effect for the role line ---- */
  var typed = document.getElementById("typed");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (typed && !reduce) {
    var words = [];
    try { words = JSON.parse(typed.getAttribute("data-words")) || []; } catch (e) {}
    if (words.length) {
      var w = 0, c = 0, deleting = false;
      (function tick() {
        var word = words[w];
        c += deleting ? -1 : 1;
        typed.textContent = word.slice(0, c);
        var delay = deleting ? 45 : 90;
        if (!deleting && c === word.length) { deleting = true; delay = 1600; }
        else if (deleting && c === 0) { deleting = false; w = (w + 1) % words.length; delay = 350; }
        setTimeout(tick, delay);
      })();
    }
  }

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.08 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ---- Active nav link on scroll ---- */
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  var sections = Array.prototype.map.call(navAnchors, function (a) {
    return document.querySelector(a.getAttribute("href"));
  });
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          navAnchors.forEach(function (a) {
            a.classList.toggle("active", a.getAttribute("href") === "#" + en.target.id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { if (s) spy.observe(s); });
  }

  /* ---- Contact form: opens the visitor's email app (no backend needed) ---- */
  var form = document.getElementById("contact-form");
  var note = document.getElementById("form-note");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var ok = true;
      ["name", "email", "message"].forEach(function (id) {
        var f = form.elements[id];
        var bad = !f.value.trim() || (id === "email" && !/^\S+@\S+\.\S+$/.test(f.value));
        f.classList.toggle("invalid", bad);
        if (bad) ok = false;
      });
      if (!ok) { note.textContent = "Please fill in all fields with a valid email."; return; }
      var subject = encodeURIComponent("Portfolio enquiry from " + form.elements.name.value.trim());
      var body = encodeURIComponent(form.elements.message.value.trim() +
        "\n\nFrom: " + form.elements.name.value.trim() + " <" + form.elements.email.value.trim() + ">");
      window.location.href = "mailto:harshavardhanbasati2004@gmail.com?subject=" + subject + "&body=" + body;
      note.textContent = "Opening your email app...";
    });
  }

  /* ---- Footer year ---- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
