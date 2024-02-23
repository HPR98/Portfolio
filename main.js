//Change navbar Icon
const navbar = document.getElementById("navbar")
const navbarClose = document.getElementById("navbar-close")
function changeIconToClose(){
    navbar.style.display = "none"
    navbarClose.style.display =  "inline"
}
function changeIconToOpen(){
    navbar.style.display = "inline"
    navbarClose.style.display = "none"
}


//Open Navbar
function showNav(){
    document.getElementById("nav").style.display = "inline"
}
function hideNav(){
    document.getElementById("nav").style.display = "none"
}

//Event Listener
navbar.addEventListener("click", () => {changeIconToClose(); showNav();})
navbarClose.addEventListener("click", () => {changeIconToOpen(); hideNav();})


//Skill reveal icon names
function revealName(){
    document.getElementById("HTML-icon").style.top = 0;
    document.getElementById("HTML-text").style.opacity = 1;
    document.getElementById("HTML-icon").style.transition = "1s"
    document.getElementById("HTML-text").style.transition = "1s"
}
function hideName(){
    document.getElementById("HTML-icon").style.top = "30px"
    document.getElementById("HTML-text").style.opacity= 0;
}

//Add event listener
document.getElementById("HTML").addEventListener("mouseover", revealName)
document.getElementById("HTML").addEventListener("mouseleave", hideName)