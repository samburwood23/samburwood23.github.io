const sidebar = document.querySelector('.sidebar');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    document.body.classList.toggle('sidebar-open');
});
