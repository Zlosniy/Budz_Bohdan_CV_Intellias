const backToTopRef = document.querySelector(".back-to-top");
console.log(backToTopRef);

window.addEventListener("scroll", backToTopScroll(backToTopRef));
backToTopRef.addEventListener("click", scrollBy);

function scrollBy() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function backToTopScroll(e) {
  return function toggleScroll() {
    console.log(document.documentElement.clientHeight);
    console.log(pageYOffset);
    if (pageYOffset < document.documentElement.clientHeight / 4) {
      e.classList.add("visually-hidden");
    } else {
      e.classList.remove("visually-hidden");
    }
  };
}
