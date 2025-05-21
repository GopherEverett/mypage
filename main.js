const btn = document.querySelector('input')
const text = document.querySelector('h1')
const form = document.querySelector('#form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    btn.classList.toggle('spin')
    text.classList.toggle('spinl')
})