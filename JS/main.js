

let passRight=document.getElementById("right")
passRight.addEventListener("click",()=>{
    document.querySelector(".content-right").classList.replace("disable","avaiable")
    document.querySelector(".content-left").classList.replace("avaiable","disable")
})

let passLeft=document.getElementById("left")
passLeft.addEventListener("click",()=>{
    document.querySelector(".content-left").classList.replace("disable","avaiable")
    document.querySelector(".content-right").classList.replace("avaiable","disable")
})