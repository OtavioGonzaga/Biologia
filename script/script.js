function borderCat(img) {
    const section = document.querySelector('section')
    if (img.outerHTML.includes('blue')) {
        img.classList.toggle('blue')
    } else if (document.querySelectorAll('.blue').length < 2) {
        img.classList.toggle('blue')
    }
    if (document.querySelectorAll('.blue').length == 2 && !document.querySelector('button')) {
        section.innerHTML += '<button onclick="cruzar()">Cruzar</button>'
    } else if (document.querySelector('button')){
        const btn = document.querySelector('button')
        btn.outerHTML = null 
    }
}
function cruzar() {
    console.log(document.querySelector('.cat').innerText.includes('A'))
}