const blackCat = 'img/black_cat_green_background.jpeg'
const hetCat = 'img/black_cat_blue_background.jpeg'
const whiteCat = 'img/white_cat_green_background.jpeg'
function borderCat(img) {
    if (img.outerHTML.includes('selected')) {
        img.classList.remove('selected')
    } else if (document.querySelectorAll('.selected').length < 2) {
        img.classList.add('selected')
    }
    if (document.querySelectorAll('.selected').length == 2) {
        document.querySelector('button').outerHTML = '<button onclick="cruzar()"><i class="bi bi-star"></i>  Cruzar</button>'
    } else if (!document.querySelector('button').outerHTML.includes('disabled')) {
        document.querySelector('button').outerHTML = '<button class="disabled"><i class="bi bi-star"></i>  Cruzar</button>'
    }
}
function cruzar() {
    var cats = document.querySelectorAll('.selected')
    if (cats[0].innerText == 'AA' && cats[1].innerText == 'AA') var child = {gen: 'AA', color: blackCat}
    if (cats[0].innerText == 'AA' && cats[1].innerText == 'aa') var child = {gen: 'Aa', color: hetCat}
    if (cats[0].innerText == 'aa' && cats[1].innerText == 'aa') var child = {gen: 'aa', color: whiteCat}
    document.querySelector('section').innerHTML += `<figure class="cat" onclick="borderCat(this)"><img src="${child.color}"><figcaption>${child.gen}</figcaption></figure>`
    document.querySelector('button').outerHTML = '<button class="disabled"><i class="bi bi-star"></i>  Cruzar</button>'
    document.querySelectorAll('.selected').forEach(e => e.classList.remove('selected'))
}
function reload() {
    location.reload()
}