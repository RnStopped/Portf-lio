const form = document.querySelector(".formulario-fale-conosco")
const mask = document.querySelector(".mascara-formulario")




function cliqueinobotao(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mask.style.visibility = "visible"
}

function CliqueiNaMascara(){
    form.style.left = "-300px"
    mask.style.visibility = "hidden"
    form.style.top = "33%"
    form.style.transform = "translateX(0)"
}

function sairdoform(){
    form.style.left = "-300px"
    mask.style.visibility = "hidden"
    form.style.top = "33%"
    form.style.transform = "translateX(0)"
}