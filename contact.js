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


