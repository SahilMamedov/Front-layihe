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


// main js

let plus  =document.querySelector(".plus");
let minus =document.querySelector(".minus");
let input =document.getElementById("input");
plus.addEventListener("click",function(){

    input.value++
})
minus.addEventListener("click",function(){

    if(input.value>1)
    input.value--
})
