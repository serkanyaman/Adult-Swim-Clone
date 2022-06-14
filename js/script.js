let navbar = document.querySelector(".mobile-navbar");
let navbarActivation = document.querySelector(".mobile-navbar-activate");
let appSection = document.querySelector(".app-section");
let appLinkClose = document.querySelector(".app-links-close");
let trailerVideo = document.querySelector(".trailerVideo");
let trailerVideoPause = document.querySelector(".trailer-pause");


// cursor class list
let cursorClasses = ["cursor-aku", "cursor-rick-head", "cursor-morty", "cursor-american-dad"];
// cursor add

(function () {
    let rndmNum = Math.floor(Math.random() * cursorClasses.length);
    console.log(rndmNum);
    document.querySelector(".trailer-section").classList.add(cursorClasses[rndmNum]);

}());

// cursor logo slider
// let logo = document.querySelector(".desktop-logo");
// let randomNum = Math.floor(Math.random() * cursorClasses.length);
// logo.addEventListener("mouseenter", function logoSlide() {
//     console.log("testa");



// });








navbarActivation.addEventListener("click", function () {
    console.log("test");
    // document.querySelector(".mobile-open").style.display = "none";
    // document.querySelector(".mobile-close").style.display = "block";
    navbar.classList.toggle("mb-nb-none");
});

appLinkClose.addEventListener("click", function () {
    console.log("test");
    // appSection.style.transform = "translateY(-100%)";
    appSection.style.display = "none";

});

trailerVideoPause.addEventListener("click", function () {
    console.log("test");

    if (trailerVideo.paused) {
        trailerVideo.play();
        document.querySelector(".trailer-continue").style.display = "none";
        document.querySelector(".trailer-paused").style.display = "block";
    } else {
        trailerVideo.pause();
        document.querySelector(".trailer-paused").style.display = "none";
        document.querySelector(".trailer-continue").style.display = "block";

    }



})