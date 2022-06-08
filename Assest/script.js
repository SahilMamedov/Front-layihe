let select=document.querySelector(".header-location")
let active = document.getElementById("select-location");
let close =document.getElementById("close")
select.addEventListener("click",function(){

    active.style.display="flex"
    active.style.justifyContent="center"
});

close.addEventListener("click",function(){
    active.style.display="none";
})




