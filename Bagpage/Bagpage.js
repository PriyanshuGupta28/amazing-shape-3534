let BuyList=JSON.parse(localStorage.getItem("cart-item"))||[];
let showdata=document.getElementById("showdata")
let showtitle= document.getElementById("showtitle")
let appendData = document.getElementById("appendDat")
let showimg= document.getElementById("showimg")
let showAlldata=document.getElementById("showAlldata")
let Subtotal= document.getElementById("Subtotal")
let showitemcount= document.getElementById("showitemcount")
let showitemcount1= document.getElementById("showitemcount1")
console.log(BuyList)


// let totalprice = 0
//     for(let i=0 ; i<BuyList.length ; i++){
//             totalprice += BuyData[i].price
//             Subtotal.innerText = totalprice
//        }



displayData(BuyList)

function displayData(data){
    appendData.innerHTML=null;
    showitemcount.innerText=data.length
    showitemcount1.innerText=data.length
    data.forEach(function(elem,index){
        let card=document.createElement("div");
        let image=document.createElement("img");
        image.setAttribute("src",elem.img);
        let name= document.createElement("h3");
        name.textContent=elem.name;
        let price=document.createElement("p");
        price.textContent="Rs:-"+elem.price;
        let size= document.createElement("p");
        size.textContent="Size:- "+elem.size;
        let Delete=document.createElement("button");
        Delete.innerText="Delete"
        Delete.addEventListener("click" ,()=>{
            BuyList.splice(index,1)
            localStorage.setItem("cart-item",JSON.stringify(BuyList));
            displayData(BuyList)
            window.location.reload()
        });


            let Price=data.reduce((acc,el) => acc+(Number(el.price)),0);
            console.log(Math.floor(Price))
            Subtotal.textContent=Price



        card.append(image,name,price,size,Delete);
        appendData.append(card);
    })
  }


