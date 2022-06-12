let select=document.querySelector(".header-location")
let active = document.getElementById("select-location");
let close =document.getElementById("close")
let categories=document.getElementById("categories")
let sidebar=document.querySelector(".menu-sidebar")
let ProductCount=document.querySelector(".count")
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

//basket js
let table=document.getElementById("table")
if(localStorage.getItem("basket")!=null){
let goodList=JSON.parse(localStorage.getItem("basket"))

goodList.forEach(product => {
    let tr=document.createElement("tr");
    let tdImage=document.createElement("td");
    let image=document.createElement("img");
    image.src=product.imgUrl;
    image.classList.add("image")
    tdImage.append(image);


    let tdName=document.createElement("td");
    tdName.innerText=product.name;

    let tdPrice=document.createElement("td");
    tdPrice.innerText=product.price;

    let tdCount=document.createElement("td");
    tdCount.innerText=product.count;


    tr.append(tdImage,tdName,tdPrice,tdCount)

    table.lastElementChild.append(tr)
})


}



function writeProductCount(){
    if(localStorage.getItem("basket")!=null){
        let goodList=JSON.parse(localStorage.getItem("basket"))
    ProductCount.innerText=goodList.length;
    }
}
writeProductCount();













function writeProductCount(){
    if(localStorage.getItem("basket")!=null){
        let goodList=JSON.parse(localStorage.getItem("basket"))
    ProductCount.textContent=goodList.length;
    }
}
writeProductCount();