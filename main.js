const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const btn3 = document.querySelector('#btn3')
const modal = document.querySelector('.modal')
const close = document.querySelector('.modal-content-close')

btn1.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')    
})
btn2.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')    
})
btn3.addEventListener('click', () => {
    modal.classList.remove('hidden')
    modal.classList.add('visible')    
})

close.addEventListener('click', () => {
    modal.classList.add('hidden')
    modal.classList.remove('visible')    
})