let btnHamburger=document.getElementById("btnHamburger")
let isVisible=false
btnHamburger.addEventListener("click",()=>{
   // window.alert("Hola")
    isVisible=!isVisible
    if(isVisible===true){
        document.querySelector(".menuHamburger").classList.replace("noVisible","visible")
    }else{
        document.querySelector(".menuHamburger").classList.replace("visible","noVisible")
    }
})