let datespan = document.querySelector('#currentYear')
datespan.innerText = new Date().getFullYear()

let lastmodifiedspan = document.querySelector("#lastModified")
lastmodifiedspan.innerText = document.lastModified

let menu_button = document.getElementById("menubutton")
let navlist = document.querySelector("nav ul")
menu_button.addEventListener('click', () =>{
    menu_button.classList.toggle("open")
    navlist.classList.toggle("open")
})

let darkbutton = document.getElementById("dark-mode")
darkbutton.addEventListener("click", () =>{    
    darkbutton.classList.toggle("dark")
    if (darkbutton.classList.contains("dark")){
        document.documentElement.style.setProperty('--text-color', 'white');        
        document.documentElement.style.setProperty('--inv-text-color', 'black');        
        document.documentElement.style.setProperty('--background-color', '#1f1f1d');    
        document.documentElement.style.setProperty('--card-color', '#588157');        
        document.documentElement.style.setProperty('--header-color', '#3A5A40');    
        document.documentElement.style.setProperty('--nav-color', '#1e2f21');                
    }
    else{
        document.documentElement.style.setProperty('--text-color', 'black');        
        document.documentElement.style.setProperty('--inv-text-color', 'white');        
        document.documentElement.style.setProperty('--background-color', '#C2B280');    
        document.documentElement.style.setProperty('--card-color', '#A3B18A');        
        document.documentElement.style.setProperty('--header-color', '#588157');    
        document.documentElement.style.setProperty('--nav-color', '#3A5A40');                
    }

})