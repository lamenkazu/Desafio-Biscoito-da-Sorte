//Variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const cookie = document.querySelector("#cookie")
const message = document.querySelector("#message")
const btnBack = document.querySelector("#backButton")

const frases = ['A vida trará coisas boas se tiver paciência.', 'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.', 'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.', 'A maior de todas as torres começa no solo.']
let randomNumber = getRandomNumber()

//Events
cookie.addEventListener('click', handleCookieClick)
btnBack.addEventListener('click', handleBackClick)


//Callbacks
function handleCookieClick(){
    message.innerHTML = frases[randomNumber]
    toggleViews()
}
function handleBackClick(){
    randomNumber = getRandomNumber()
    toggleViews()
}

//Aux Functions
function toggleViews(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}
function getRandomNumber(){
    return Math.round(Math.random() * 4)
}