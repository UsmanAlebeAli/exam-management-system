const questions = [
  {
    question: " from HTML the letter 'H' stands for:",
    answers: [
      {
        text: "Human",
        correct: false,
      },
      {
        text: "Hyper",
        correct: true,
      },
      {
        text: "Horse",
        correct: false,
      },
      {
        text: "hover",
        correct: false,
      },
    ],
  },
  {
    question: " from HTML the letter 'T' stands for:",
    answers: [
      {
        text: "Total",
        correct: false,
      },
      {
        text: "Tops",
        correct: false,
      },
      {
        text: "Text",
        correct: true,
      },
      {
        text: "Title",
        correct: false,
      },
    ],
  },
  {
    question: " from HTML the letter 'M' stands for:",
    answers: [
      {
        text: "Markup",
        correct: true,
      },
      {
        text: "Mouse",
        correct: false,
      },
      {
        text: "Market",
        correct: false,
      },
      {
        text: "Map",
        correct: false,
      },
    ],
  },
  {
    question: " from HTML the letter 'L' stands for:",
    answers: [
      {
        text: "Large",
        correct: false,
      },
      {
        text: "Loom",
        correct: false,
      },
      {
        text: "Large",
        correct: false,
      },
      {
        text: "Language",
        correct: true,
      },
    ],
  },
];
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("buttons");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct == "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Try again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
