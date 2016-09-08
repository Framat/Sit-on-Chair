document.addEventListener("DOMContentLoaded", function() {
    // SLIDER//
    var nextPicture = document.querySelector("#arrow_right");
    var prevPicture = document.querySelector("#arrow_left");


    var allImg = document.querySelector("div.slider > ul").children;


    var currentImg = 0;


    allImg[currentImg].classList.add("visible");


    nextPicture.addEventListener("click", function() {
        console.log("kliknieto Next");
        allImg[currentImg].classList.remove("visible");
        currentImg++;

        if (currentImg >= allImg.length) {
            currentImg = 0;

        }
        allImg[currentImg].classList.add("visible");

    });

    prevPicture.addEventListener("click", function() {
      
        allImg[currentImg].classList.remove("visible");
        currentImg--;
        if (currentImg < 0) {
            currentImg = allImg.length - 1;
        }
        allImg[currentImg].classList.add("visible");
    });








});
