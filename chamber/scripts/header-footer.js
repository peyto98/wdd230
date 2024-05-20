let datespan = document.querySelector('#currentYear')
datespan.innerText = new Date().getFullYear()

let lastmodifiedspan = document.querySelector("#lastModified")
lastmodifiedspan.innerText = document.lastModified

let menu_button = document.getElementById("menu-button")
let navlist = document.querySelector("nav ul")
menu_button.addEventListener('click', () =>{
    menu_button.classList.toggle("open")
    navlist.classList.toggle("open")
})