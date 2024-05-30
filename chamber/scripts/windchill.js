let tempSpan = document.getElementById("temperature")
let windSpan = document.getElementById("windspeed")
let chillSpan = document.getElementById("windchill")

function showWindChill(temp, wind){
    if (temp > 50 || wind <= 3){
        chillSpan.innerText='N/A'
        return
    }
}

showWindChill(parseInt(tempSpan.innerText), parseInt(windSpan.innerText))

