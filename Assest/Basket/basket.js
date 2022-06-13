let select=document.querySelector(".header-location")
let active = document.getElementById("select-location");
let close =document.getElementById("close")
let categories=document.getElementById("categories")
let sidebar=document.querySelector(".menu-sidebar")
let ProductCount=document.querySelector(".count")
let sumTotal=document.getElementById("sumtotal")
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
let cart=document.querySelector(".cart-empty")
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
    let spanCount=document.createElement("span")
    tdCount.append(spanCount)
    spanCount.innerText=product.count;
    let subTotal=document.createElement("td")
    
    let minus=document.createElement("i")
    let plas=document.createElement("i")
    let div1=document.createElement("div")
    let div2=document.createElement("div")
    let money=document.createElement("span")
    money.innerText='$'
    
    minus.classList.add("fa-solid", "fa-minus")
    subTotal.innerText=+product.count*product.price
    plas.classList.add("fa-solid", "fa-plus")
    div1.classList.add("plasminus","minus")
    div2.classList.add("plasminus","plas")
    div1.append(plas)
    div2.append(minus)
    tdCount.style.display='flex'
    

    tdCount.insertAdjacentElement('afterbegin',div1)
    tdCount.insertAdjacentElement('beforeend',div2)
    table.lastElementChild.append(tr)
    div1.addEventListener("click",function(){
        let num;
        product.count++;
        num = product.count
        spanCount.textContent = num
        subTotal.innerText=+product.count*product.price
        localStorage.setItem("basket",JSON.stringify(goodList))
        
        
    })
    div2.addEventListener("click",function(){
        if(product.count>0){
            let num ;
            product.count--;
            num = product.count
            spanCount.textContent = num
            subTotal.innerText=+product.count*product.price
            if(product.count<1){
                this.parentElement.parentElement.remove()    
            }
            let filtergoodList= goodList.filter(product => product.count >=1);
            localStorage.setItem("basket",JSON.stringify(filtergoodList))
            writeProductCount();
            check()
        }
        
        
    })
             
    let closeBtn=document.createElement("i")

    closeBtn.classList.add("fa-solid","fa-xmark","icon")
    closeBtn.setAttribute('data-id',`${product.id}`)
    closeBtn.addEventListener("click",function(event){
   

    let id = this.getAttribute("data-id")
    let filtergoodList= goodList.filter(product => product.id !== id);
    localStorage.setItem("basket",JSON.stringify(filtergoodList))
    goodList=JSON.parse(localStorage.getItem("basket"));
    this.parentElement.remove()
    check()
    writeProductCount();
    
   })

    tdPrice.append(money)
    tr.append(tdImage,tdName,tdPrice,tdCount,subTotal,closeBtn)

})
}
function check(){
    
    if(table.firstElementChild.nextElementSibling.firstElementChild==null){
        table.style.display="none"
        cart.style.display="block"
    }
    else if(table.firstElementChild.nextElementSibling.firstElementChild!==null){
        table.style.display="block"
        cart.style.display="none"
    }
}

function writeProductCount(){
    if(localStorage.getItem("basket")!=null){
        let goodList=JSON.parse(localStorage.getItem("basket"))
    ProductCount.textContent=goodList.length;
    
    }
}
writeProductCount();
check()