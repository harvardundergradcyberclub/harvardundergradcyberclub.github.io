"use strict";

// Highlight the current link
function checkScroll() {
  let header = document.querySelector("#header");
  // the +10 is just a little buffer; could perhaps be changed when margins
  // change
  let pos = window.scrollY + header.offsetHeight + 10;
  document.querySelectorAll("a.scroll").forEach(link => {
    let target = document.querySelector(link.hash);
    if (pos >= target.offsetTop && pos <= target.offsetTop + target.offsetHeight) {
      link.classList.add("active");
      link.ariaCurrent = "true";
    } else {
      link.classList.remove("active");
      link.ariaCurrent = "false";
    }
  });
}

document.addEventListener("scroll", checkScroll);

// Scroll slowly
function scrollTo(el) {
  let header = document.querySelector("#header");
  let target = document.querySelector(el.hash);
  window.scroll({top: target.offsetTop - header.offsetHeight, behavior: "smooth"});
  el.blur();
}

document.querySelectorAll("a.scroll").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    scrollTo(e.target);
  });
});
