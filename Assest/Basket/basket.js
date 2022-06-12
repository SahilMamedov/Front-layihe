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

    let minus=document.createElement("i")
    let plas=document.createElement("i")
    let div1=document.createElement("div")
    let div2=document.createElement("div")
    minus.classList.add("fa-solid", "fa-minus")
    
    plas.classList.add("fa-solid", "fa-plus")
    div1.classList.add("plasminus","minus")
    div2.classList.add("plasminus","plas")
    div1.append(plas)
    div2.append(minus)
    tdCount.style.display='flex'

    tdCount.insertAdjacentElement('afterbegin',div1)
    tdCount.insertAdjacentElement('beforeend',div2)
   

    tr.append(tdImage,tdName,tdPrice,tdCount)

    table.lastElementChild.append(tr)



    div1.addEventListener("click",function(){
        console.log("plas");
        let num =0;
        product.count++;
        num = product.count
        tdCount.textContent = num
    })
    div2.addEventListener("click",function(){
        console.log("minus");
    tdCount.value--
    })
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