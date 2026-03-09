function openNavBar () {
    document.querySelector("footer").style.display = "none";
    document.querySelector("main").style.display = "none";
    document.getElementById("mobile-nav").style.display = "flex";
    document.getElementById("nav-btn").onclick = closeNavBar;
}

function closeNavBar () {
    document.querySelector("footer").style.display = "flex";
    document.querySelector("main").style.display = "flex";
    document.getElementById("mobile-nav").style.display = "none";
    document.getElementById("nav-btn").onclick = openNavBar;
}


document.getElementById("nav-btn").onclick = openNavBar;
