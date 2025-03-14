var sidenav = document.querySelector(".side-navbar");

function showNavBar() {
    sidenav.style.left = "0";  // Move sidebar into view
}

function hideNavBar() {
    sidenav.style.left = "-60%";  // Move sidebar out of view
}
