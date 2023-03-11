const hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const button = document.querySelector('button')
const color = document.querySelector('.color')
const body = document.querySelector('body')
const a = document.querySelector('#hex')

window.addEventListener('DOMContentLoaded', () => {
    res = getRandomNumber()
    body.style.background = res
    color.innerHTML = `${res}`
    a.style.textDecoration = "underline";
})

const getRandomNumber = () => {
    let string = '#'
    for (let i = 1; i <= 6; i++) {
        string = string.concat(hex[Math.floor(Math.random() * hex.length)])
    }
    return string
}

button.addEventListener('click', () => {
    res = getRandomNumber()
    body.style.background = res
    color.innerHTML = `${res}`

})