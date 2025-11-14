const sidebar = document.querySelector(".sidebar");
const hamburger = document.querySelector(".hamburger");

if (hamburger && sidebar) {
    hamburger.addEventListener("click", () => {
        sidebar.classList.toggle("show");
    });
}
