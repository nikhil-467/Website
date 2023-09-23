const one=document.querySelector(".one");
const btnpopup=document.querySelector(".button-popup");
const iconclose=document.querySelector(".back");

btnpopup.addEventListener("click",()=>{
    one.classList.add("active-popup");
});
iconclose.addEventListener("click",()=>{
    one.classList.remove("active-popup");
});

