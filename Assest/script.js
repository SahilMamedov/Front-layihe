let select=document.querySelector(".header-location")
let active = document.getElementById("select-location");
let close =document.getElementById("close")
let categories=document.getElementById("categories")
let sidebar=document.querySelector(".menu-sidebar")

categories.addEventListener("click",function(ev){
    ev.preventDefault()
    if(sidebar.classList.contains("hidden")){
        sidebar.classList.remove("hidden")
    }
    else{
        sidebar.classList.add("hidden")
    }
    
})
select.addEventListener("click",function(){

    active.style.display="flex"
    active.style.justifyContent="center"
});

close.addEventListener("click",function(){
    active.style.display="none";
})




const swiper = new Swiper('.swiper', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      loop: true,
      grabCursor: true,
    //   autoplay: {
    //     delay: 2000,
    //     stopOnLastSlide: false,
    //     disableOnInteraction: false,
    //   },
      speed: 1000,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });