const date = document.querySelector("#date")
const linkList = document.querySelector(".navbar")
date.innerHTML = new Date().getFullYear()
const ulLink = document.querySelector(".links")


// hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu")
hamburgerMenu.addEventListener("click", hilal)

function hilal () {
    linkList.classList.toggle("toggle")
   
}
// smoot scroll and navbar-fixed
const headerTop = document.querySelector(".header-top")
window.addEventListener("scroll", function (){
    const scrollheight = window.pageYOffset;
    const navHeight = headerTop.getBoundingClientRect().height
    if(scrollheight > navHeight) {
        headerTop.classList.add("fixed-navbar")
    }
    else {
        headerTop.classList.remove("fixed-navbar")
    }

})

// links position calculate
const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        let navBarHeight = headerTop.getBoundingClientRect().height
        let position = element.offsetTop - navBarHeight;
        window.scrollTo({
            left:0,
            top: position,
        })
        
    })
})