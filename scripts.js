(function () {

    let currentIndex = 0;
    let correctAnswers = 0;

    const questions = [
        {
            question: "What is the capital of Kenya",
            answers: [
                {
                    correct: false,
                    value: "Lagos"
                },
                {
                    correct: true,
                    value: "Nairobi"
                },
                {
                    correct: false,
                    value: "Burkina Faso"
                },
                {
                    correct: false,
                    value: "Tokyo"
                },
            ]
        },
        {
            question: "What is the capital of Egypt",
            answers: [
                {
                    correct: true,
                    value: "Cairo"
                },
                {
                    correct: false,
                    value: "Atlanta"
                },
                {
                    correct: false,
                    value: "Kenya"
                },
                {
                    correct: false,
                    value: "Benin Republic"
                },
            ]
        },
        {
            question: "What is the capital of New York",
            answers: [
                {
                    correct: false,
                    value: "Manhattan"
                },
                {
                    correct: false,
                    value: "Ohio"
                },
                {
                    correct: true,
                    value: "New York"
                },
                {
                    correct: false,
                    value: "London"
                },
            ]
        },
        {
            question: "What is the capital of Illinois",
            answers: [
                {
                    correct: false,
                    value: "France"
                },
                {
                    correct: true,
                    value: "Chicago"
                },
                {
                    correct: false,
                    value: "Barcelona"
                },
                {
                    correct: false,
                    value: "St. Charles"
                },
            ]
        },
        {
            question: "What is the capital of Italy",
            answers: [
                {
                    correct: false,
                    value: "Albany"
                },
                {
                    correct: false,
                    value: "Oxford"
                },
                {
                    correct: false,
                    value: "Vatican City"
                },
                {
                    correct: true,
                    value: "Rome"
                },
            ]
        },
    ];


    function showNext() {
        if (currentIndex >= questions.length) {
            questionsPage.style.display = 'none';
            resultsPage.style.display = 'block';
            return;
        }
        let currentQuestion = questions[currentIndex++];
        displayQuestion(currentQuestion);
    }

    function displayQuestion(questionAnswer) {
        let question = questionAnswer.question;
        let answers = questionAnswer.answers;
        let options = '';

        for (let i = 0; i < answers.length; ++i) {
            let answer = answers[i];
            let alpha = String.fromCharCode(65 + i);
            options += `<p>
            <button class="${answer.correct ? "correct" : "incorrect"}"> 
            ${alpha}. ${answer.value}
            </button> 
            </p>`;
        }
        questionHolder.innerHTML = `Q${currentIndex}. ${question}`;
        answersHolder.innerHTML = options;
    }

    function evaluateAnswer(event) {
        let buttonClicked = event.target;

        if (!buttonClicked.nodeName == 'button') return;

        if (!buttonClicked.classList.contains('correct')) {
            buttonClicked.style.backgroundColor = 'red';
            buttonClicked.style.color = 'white';
        } else {
            ++correctAnswers;
        }
        highlightCorrectAnswer();
        updateCorrectCountDisplay();
        disableAnswerSelection();
    }

    function setDefaultState() {
        currentIndex = 0;
        correctAnswers = 0;
        for (let i = 0; i < questionCountDisplay.length; ++i) {
            questionCountDisplay[i].innerHTML = questions.length;
        }
        showNext();
        updateCorrectCountDisplay();
        questionsPage.style.display = 'block';
        resultsPage.style.display = 'none';
    }

    function updateCorrectCountDisplay() {
        for (let i = 0; i < correctCountDisplay.length; ++i) {
            correctCountDisplay[i].innerHTML = correctAnswers;
        }
        correctPercentageDisplay.innerHTML = (correctAnswers / questions.length) * 100;
    }

    function disableAnswerSelection() {
        var answerButtons = document.querySelectorAll("#answer-options p button");
        for (let i = 0; i < answerButtons.length; ++i) {
            answerButtons[i].disabled = true;
        }
    }

    function highlightCorrectAnswer() {
        var answerButtons = document.querySelectorAll("#answer-options p button");
        for (let i = 0; i < answerButtons.length; ++i) {
            if (answerButtons[i].classList.contains('correct')) {
                answerButtons[i].style.backgroundColor = 'green';
                answerButtons[i].style.color = 'white';
            }
        }
    }


    // ELEMENTS
    const questionHolder = document.getElementById("question-holder");
    const answersHolder = document.getElementById("answer-options");
    const nextButton = document.getElementById("next");
    const questionsPage = document.getElementById("questions-page");
    const resultsPage = document.getElementById("result-page");
    const correctPercentageDisplay = document.getElementById("correct-percentage");
    // const afreshButton = document.getElementById("restart-button");


    const questionCountDisplay = document.getElementsByClassName("total-count");
    const correctCountDisplay = document.getElementsByClassName("correct-count");


    //DEFAULT STATES
    setDefaultState();

    // Event listeners
    nextButton.addEventListener("click", showNext);
    // afreshButton.addEventListener("click", restartGame());
    answersHolder.addEventListener("click", evaluateAnswer);



})();


