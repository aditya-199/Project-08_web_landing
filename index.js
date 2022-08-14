const hamburger = document.querySelector(".hamburger");

const navList = document.querySelector(".nav-items");

hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
});