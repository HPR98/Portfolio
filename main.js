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
//Reveal functions
function revealHTML(){
    document.getElementById("HTML-icon").style.top = 0;
    document.getElementById("HTML-text").style.opacity = 1;
    document.getElementById("HTML-icon").style.transition = "1s"
    document.getElementById("HTML-text").style.transition = "1s"
}
function revealCSS(){
    document.getElementById("CSS-icon").style.top = 0;
    document.getElementById("CSS-text").style.opacity = 1;
    document.getElementById("CSS-icon").style.transition = "1s"
    document.getElementById("CSS-text").style.transition = "1s"
}
function revealJS(){
    document.getElementById("JS-icon").style.top = 0;
    document.getElementById("JS-text").style.opacity = 1;
    document.getElementById("JS-icon").style.transition = "1s"
    document.getElementById("JS-text").style.transition = "1s"
}
function revealPython(){
    document.getElementById("Python-icon").style.top = 0;
    document.getElementById("Python-text").style.opacity = 1;
    document.getElementById("Python-icon").style.transition = "1s"
    document.getElementById("Python-text").style.transition = "1s"
}
function revealGit(){
    document.getElementById("Git-icon").style.top = 0;
    document.getElementById("Git-text").style.opacity = 1;
    document.getElementById("Git-icon").style.transition = "1s"
    document.getElementById("Git-text").style.transition = "1s"
}
function revealGithub(){
    document.getElementById("Github-icon").style.top = 0;
    document.getElementById("Github-text").style.opacity = 1;
    document.getElementById("Github-icon").style.transition = "1s"
    document.getElementById("Github-text").style.transition = "1s"
}
function revealLua(){
    document.getElementById("LUA-icon").style.top = 0;
    document.getElementById("LUA-text").style.opacity = 1;
    document.getElementById("LUA-icon").style.transition = "1s"
    document.getElementById("LUA-text").style.transition = "1s"
}
function revealMD(){
    document.getElementById("MD-icon").style.top = 0;
    document.getElementById("MD-text").style.opacity = 1;
    document.getElementById("MD-icon").style.transition = "1s"
    document.getElementById("MD-text").style.transition = "1s"
}
//Hide functions
function hideHTML(){
    document.getElementById("HTML-icon").style.top = "30px"
    document.getElementById("HTML-text").style.opacity= 0;
}
function hideCSS(){
    document.getElementById("CSS-icon").style.top = "30px"
    document.getElementById("CSS-text").style.opacity= 0;
}
function hideJS(){
    document.getElementById("JS-icon").style.top = "30px"
    document.getElementById("JS-text").style.opacity= 0;
}
function hidePython(){
    document.getElementById("Python-icon").style.top = "30px"
    document.getElementById("Python-text").style.opacity= 0;
}
function hideGit(){
    document.getElementById("Git-icon").style.top = "30px"
    document.getElementById("Git-text").style.opacity= 0;
}
function hideGithub(){
    document.getElementById("Github-icon").style.top = "30px"
    document.getElementById("Github-text").style.opacity= 0;
}
function hideLUA(){
    document.getElementById("LUA-icon").style.top = "30px"
    document.getElementById("LUA-text").style.opacity= 0;
}
function hideMD(){
    document.getElementById("MD-icon").style.top = "30px"
    document.getElementById("MD-text").style.opacity= 0;
}

//Add eventlistener
document.getElementById("HTML").addEventListener("mouseenter", revealHTML)
document.getElementById("HTML").addEventListener("mouseleave", hideHTML)

document.getElementById("CSS").addEventListener("mouseenter", revealCSS)
document.getElementById("CSS").addEventListener("mouseleave", hideCSS)

document.getElementById("JS").addEventListener("mouseenter", revealJS)
document.getElementById("JS").addEventListener("mouseleave", hideJS)

document.getElementById("Python").addEventListener("mouseenter", revealPython)
document.getElementById("Python").addEventListener("mouseleave", hidePython)

document.getElementById("Git").addEventListener("mouseenter", revealGit)
document.getElementById("Git").addEventListener("mouseleave", hideGit)

document.getElementById("Github").addEventListener("mouseenter", revealGithub)
document.getElementById("Github").addEventListener("mouseleave", hideGithub)

document.getElementById("LUA").addEventListener("mouseenter", revealLua)
document.getElementById("LUA").addEventListener("mouseleave", hideLUA)

document.getElementById("MD").addEventListener("mouseenter", revealMD)
document.getElementById("MD").addEventListener("mouseleave", hideMD)