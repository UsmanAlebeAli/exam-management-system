import React, { useState } from "react";
import "./exam.css"; // Adjust the path as necessary

const questions = [
  {
    question: "From HTML, the letter 'H' stands for:",
    answers: [
      { text: "Human", correct: false },
      { text: "Hyper", correct: true },
      { text: "Horse", correct: false },
      { text: "Hover", correct: false },
    ],
  },
  {
    question: "From HTML, the letter 'T' stands for:",
    answers: [
      { text: "Total", correct: false },
      { text: "Tops", correct: false },
      { text: "Text", correct: true },
      { text: "Title", correct: false },
    ],
  },
  {
    question: "From HTML, the letter 'M' stands for:",
    answers: [
      { text: "Markup", correct: true },
      { text: "Mouse", correct: false },
      { text: "Market", correct: false },
      { text: "Map", correct: false },
    ],
  },
  {
    question: "From HTML, the letter 'L' stands for:",
    answers: [
      { text: "Large", correct: false },
      { text: "Loom", correct: false },
      { text: "Large", correct: false },
      { text: "Language", correct: true },
    ],
  },
];

const Exams = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    document.querySelectorAll(".buttons").forEach((button) => {
      button.disabled = true;
      if (button.dataset.correct === "true") {
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
      }
    });
    document.getElementById("next-btn").style.display = "block";
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      document.getElementById("next-btn").style.display = "none";
      // Reset answer button states for the next question
      document.querySelectorAll(".buttons").forEach((button) => {
        button.disabled = false;
        button.classList.remove("correct", "incorrect");
      });
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);

    // Check if the element exists before accessing its properties
    const nextButton = document.getElementById("next-btn");
    if (nextButton) {
      nextButton.style.display = "none";
    } else {
      console.warn("Element with ID 'next-btn' not found.");
    }

    // Reset answer button states for the first question
    document.querySelectorAll(".buttons").forEach((button) => {
      button.disabled = false;
      button.classList.remove("correct", "incorrect");
    });
  };

  return (
    <div className="app">
      <h1>Simple Quiz</h1>
      <div className="quiz">
        {showScore ? (
          <div>
            <h2>
              You scored {score} out of {questions.length}!
            </h2>
            <button className="buttons" onClick={resetQuiz}>
              Try Again
            </button>
          </div>
        ) : (
          <div>
            <h2 id="question">
              {currentQuestionIndex + 1}.{" "}
              {questions[currentQuestionIndex].question}
            </h2>
            <div id="answer-buttons">
              {questions[currentQuestionIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  className="buttons"
                  data-correct={answer.correct}
                  onClick={() => handleAnswerClick(answer.correct)}
                >
                  {answer.text}
                </button>
              ))}
            </div>
            <button
              id="next-btn"
              onClick={handleNextQuestion}
              style={{ display: "none" }}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exams;
