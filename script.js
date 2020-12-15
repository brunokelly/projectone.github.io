
const texto = document.querySelector('.converted')
let temp

document.querySelector('.cel').addEventListener('click', (e) => {
    temp = document.querySelector('input').value
    let res = (temp-32)*5/9
    texto.innerHTML = `${res.toFixed(1)}°C`;
} )

document.querySelector('.fah').addEventListener('click', (e) => {
    temp = document.querySelector('input').value
    let res = (temp*9/5)+32
    texto.innerHTML = `${res.toFixed(1)}°F`;
})
