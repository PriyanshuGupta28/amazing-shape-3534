let Buynow=document.getElementById("Buynow")
Buynow.addEventListener("click",()=>{
    alert("Ordered")
    let lsdata= localStorage.setItem("orderdata",JSON.stringify(Buynow))
    setTimeout(() => {
        window.location.href="Homepage.html"
    },2000);
})