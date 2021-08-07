// mobile view menu open and close 


const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navMenu = document.querySelector(".nav-list");

openBtn.addEventListener("click", () => {
    navMenu.classList.add("show")
    if(navMenu.classList.contains("show")){
        openBtn.style.display="none"
    }
})
closeBtn.addEventListener("click", () => {
    navMenu.classList.remove("show")
    if(!navMenu.classList.contains("show")){
        openBtn.style.display="block"
    }
})





// cart side drawer open and close 
const openCart = document.querySelector(".open-cart")
const closeCart = document.querySelector(".close-cart")
const cart = document.querySelector(".cart")

openCart.addEventListener("click", (e)=>{
    e.preventDefault()
    cart.classList.add("show")
})

closeCart.addEventListener("click", (e)=>{
    e.preventDefault()
cart.classList.remove("show")
})