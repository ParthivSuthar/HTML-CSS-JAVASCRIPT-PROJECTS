// Single Product navigation

let mainImg = document.getElementById("mainimage")
let smallImg = document.getElementsByClassName("small-img")

smallImg[0].addEventListener("click", function(){
    mainImg.src = smallImg[0].src
})

smallImg[1].addEventListener("click", function(){
    mainImg.src = smallImg[1].src
})

smallImg[2].addEventListener("click", function(){
    mainImg.src = smallImg[2].src
})

smallImg[3].addEventListener("click", function(){
    mainImg.src = smallImg[3].src
})