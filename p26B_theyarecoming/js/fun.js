const menuBtn = document.querySelector(".header-responsiveMenuButton");
const closeBtn = document.querySelector(".responsiveMenu-close")
const responsiveMenu = document.querySelector(".responsiveMenu");

menuBtn.addEventListener("click", function(){
    responsiveMenu.classList.add("is-active");
})

closeBtn.addEventListener("click", function(){
    responsiveMenu.classList.remove("is-active");
})