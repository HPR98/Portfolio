const navbar = document.getElementById("navbar")

navbar.addEventListener("click", openNavbar)

function navbar(){
    document.getElementById("about-me").innerHTML = "About you"
}