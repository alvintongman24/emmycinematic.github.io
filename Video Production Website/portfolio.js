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




var swiper = new swiper('.swiper-wrapper',{
    pagination: '.swiper-pagination',
    effect: 'coverflow',
    grabCursor:true,
    slidesPerView:'auto',
    coverflow: {
        rotate:20,
        stretch:0,
        depth:200,
        modifier:1,
        slideShow:true,
    },
    loop: true,
})
//  