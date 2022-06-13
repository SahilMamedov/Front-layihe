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

let btn=document.querySelectorAll(".product-btn-group")

btn.forEach(element => {
    element.addEventListener("click",function(ev){
        ev.preventDefault();

        if(localStorage.getItem("basket")==null){
            localStorage.setItem("basket",JSON.stringify([]))
        }
        let goodList=JSON.parse(localStorage.getItem("basket"));
        let ProductId =this.parentElement.parentElement.parentElement.getAttribute("data-id");
        
        let existProduct =goodList.find(p=>p.id==ProductId);
        if(existProduct==undefined) {
            
            goodList.push({
                id:ProductId,
                name:this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.firstElementChild.firstElementChild.innerText,
                price:this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.nextElementSibling.lastElementChild.lastElementChild.innerText,
                imgUrl:this.parentElement.parentElement.parentElement.firstElementChild.firstElementChild.lastElementChild.firstElementChild.getAttribute("src"),
                subTotal:0,
                count:1,
                
            })
            
        }
        else{
            existProduct.count++;
            
        }
        
        localStorage.setItem("basket",JSON.stringify(goodList))
   
        writeProductCount();
        
    })

});


function writeProductCount(){
    if(localStorage.getItem("basket")!=null){
        let goodList=JSON.parse(localStorage.getItem("basket"))
    ProductCount.innerText=goodList.length;
    }
}


writeProductCount();

