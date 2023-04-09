function borderCat(img) {
    let cats = document.querySelectorAll('.blue')
    if ((img.style.border).includes('rgb')) {
        img.style.border = '8px solid white'
        img.classList.toggle('blue')
    } else if (cats.length < 2) {
        img.style.border = '8px solid #4c8bf5'
        img.classList.toggle('blue')
    }
}