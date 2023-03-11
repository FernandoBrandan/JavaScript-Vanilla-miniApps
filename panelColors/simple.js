const button = document.querySelector('button')
const color = document.querySelector('.color')
const body = document.querySelector('body')
const a = document.querySelector('#simple')

const getRandomNumber = (colors) => {
    const array = colors.split(',')
    return array[Math.floor(Math.random() * array.length)]
}

const datos = () => {
    fetch('./colors.txt')
    .then(res => res.text())
    .then(res => getRandomNumber(res))
    .then(res => {
        body.style.background = res
        color.innerHTML = `${res}`    
        a.style.textDecoration = "underline";
    })
}

window.addEventListener('DOMContentLoaded', () => {
    datos()
})

button.addEventListener('click', (e) => {
    datos()
})