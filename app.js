const form = document.querySelector('.quiz-form')
const correctAnswers = ['2009', '10000', 'NÃO', 'BITCOIN', 'REGISTRO']
const scoreAlert = document.querySelector('.alert')
const buttonReset = document.querySelector('[name="reset"]')

form.addEventListener('submit', event => {
    event.preventDefault()
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
        form.inputQuestion5.value,
    ]

    let score = 0

    userAnswers.forEach((userAnswer, index) => {
        if (userAnswer === correctAnswers[index]) {
            score += 20
        }
    })


    scoreAlert.style.display = "inline";
    scoreAlert.textContent = `Sua pontuação foi: ${score}`
})

buttonReset.addEventListener('click', () => {
    scoreAlert.style.display = "none";
})