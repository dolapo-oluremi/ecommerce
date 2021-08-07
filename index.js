// mobile view menu open and close 


const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navMenu = document.querySelector(".nav-list");
const icon = document.querySelectorAll("i")[10];
console.log(icon);

openBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show")

    if (navMenu.classList.contains("show")) {
        icon.classList.replace("fa-bars", "fa-times")
        console.log(icon);
    } else {
        icon.classList.replace("fa-times", "fa-bars")
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