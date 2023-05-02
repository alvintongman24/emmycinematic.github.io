function openNav() {
    document.getElementById("mySidepanel").style.width = "90%";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
}


var loader = document.getElementById("preloader");

window.addEventListener("load", vanish);
function vanish() {
    loader.classList.add("disppear")
};