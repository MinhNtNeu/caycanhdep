const nav = document.querySelector("nav");
const mobileNav =document.querySelector("nav.mobile")
const menuIcon=document.querySelector(".menu-icon");
const closeIcon=document.querySelector(".close-icon");
const mobileContainer=document.querySelector(".mobile-container");
window.addEventListener("scroll", ()=>{
    if(window.pageXOffset>60){
        nav.classList.add("scrolled");
        mobileNav.classList.add("scrolled")
    } else{
        nav.classList.remove("scrolled");
        mobileNav.classList.remove("scrolled");
    }
});
menuIcon.addEventListener("click", ()=>{
    mobileContainer.classList.add("active");
});
closeIcon.addEventListener("click", ()=>{
    mobileContainer.classList.remove("active");
});
document.getElementById("myButton").onclick=function(){
    console.log("click register");
    window.location.href="/btnhom3/Danhmucsp.html";
}
