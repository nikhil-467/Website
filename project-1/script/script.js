const one=document.querySelector(".one");
/*const one1=document.querySelector(".one1");*/
const btnpopup=document.querySelector(".button-popup");
const btnpopup1=document.querySelector(".button-popup1");
const iconclose=document.querySelector(".back");
const loginpopup=document.querySelector(".btn");

btnpopup.addEventListener("click",()=>{
    one.classList.add("active-popup");
});
btnpopup1.addEventListener("click",()=>{
    one.classList.add("active-popup");
});
iconclose.addEventListener("click",()=>{
    one.classList.remove("active-popup");
});
/*loginpopup.addEventListener("click",()=>{
    one.classList.add("active-popup");
});*/






