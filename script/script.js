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
function probabilidade(AA, Aa, aa) {
    const random = Math.random()
    if (random <= AA) {
      return {gen: 'AA', color: blackCat}
    } else if (random <= (AA + Aa)) {
      return {gen: 'Aa', color: hetCat}
    } else {
      return {gen: 'aa', color: whiteCat}
    }
}
function cruzar() {
    let cats = document.querySelectorAll('.selected')
    if (cats[0].innerText == 'AA' && cats[1].innerText == 'AA') var child = {gen: 'AA', color: blackCat}
    if (cats[0].innerText == 'AA' && cats[1].innerText == 'aa') var child = {gen: 'Aa', color: hetCat}
    if (cats[0].innerText == 'aa' && cats[1].innerText == 'AA') var child = {gen: 'Aa', color: hetCat}
    if (cats[0].innerText == 'aa' && cats[1].innerText == 'aa') var child = {gen: 'aa', color: whiteCat}
    if (cats[0].innerText == 'Aa' && cats[1].innerText == 'Aa') var child = probabilidade(0.25, 0.5, 0.25)
    if (cats[0].innerText == 'AA' && cats[1].innerText == 'Aa') var child = probabilidade(0.5, 0.5, 0)
    if (cats[0].innerText == 'Aa' && cats[1].innerText == 'AA') var child = probabilidade(0.5, 0.5, 0)
    if (cats[0].innerText == 'aa' && cats[1].innerText == 'Aa') var child = probabilidade(0, 0.5, 0.5)
    if (cats[0].innerText == 'Aa' && cats[1].innerText == 'aa') var child = probabilidade(0, 0.5, 0.5)
    document.querySelector('section').innerHTML += `<figure class="cat" onclick="borderCat(this)"><img src="${child.color}"><figcaption>${child.gen}</figcaption></figure>`
    document.querySelector('button').outerHTML = '<button class="disabled"><i class="bi bi-star"></i>  Cruzar</button>'
    document.querySelectorAll('.selected').forEach(e => e.classList.remove('selected'))
}
function reload() {
    location.reload()
}