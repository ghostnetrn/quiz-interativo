const form = document.querySelector('.quiz-form')
const correctAnswers = ['2009', '10000', 'NÃO', 'BITCOIN', 'REGISTRO']
const scoreAlert = document.querySelector('.alert')
const buttonReset = document.querySelector('[name="reset"]')
const result = document.querySelector('.result')

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
        const isAnswerValid = userAnswer === correctAnswers[index]

        if (isAnswerValid) {
            score += 20
        }
    })

    scoreAlert.style.display = "inline";
    scoreAlert.textContent = `Sua pontuação foi: ${score}`

    scrollTo(0, 0);
    result.classList.remove('d-none')
    
    let counter = 0

    const timer = setInterval(() => {
        if (counter === score) {
            clearInterval(timer)
        }

        result.querySelector('span').textContent = `${counter}%`
        counter++

    }, 10)
})

buttonReset.addEventListener('click', () => {
    scoreAlert.style.display = "none";
    result.classList.add('d-none')
})


