const ham = document.getElementById('icon-hamburger');
const nav = document.querySelector('.nav-links');

ham.addEventListener("click", () => {
    nav.classList.toggle("hidden");
})