const button = document.querySelector(".menu-button");
const nav = document.querySelector(".site-nav");

if (button && nav) {
  button.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  });
}
