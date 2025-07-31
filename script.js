const questions = [
  {
    question: "What is the capital of India?",
    answers: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    correct: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Venus", "Mars", "Jupiter"],
    correct: 2
  },
  {
    question: "What is 5 + 3?",
    answers: ["5", "8", "9", "7"],
    correct: 1
  }
];

let currentQuestionIndex = 0;
const questionEl = document.getElementById("question");
const answerBtns = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");

function showQuestion() {
  let current = questions[currentQuestionIndex];
  questionEl.textContent = current.question;
  answerBtns.forEach((btn, index) => {
    btn.textContent = current.answers[index];
    btn.onclick = () => selectAnswer(index);
  });
}

function selectAnswer(index) {
  let correct = questions[currentQuestionIndex].correct;
  answerBtns.forEach((btn, i) => {
    btn.disabled = true;
    if (i === correct) btn.style.background = "green";
    else if (i === index) btn.style.background = "red";
  });
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    resetState();
    showQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    answerBtns.forEach(btn => btn.style.display = "none");
    nextBtn.style.display = "none";
  }
};

function resetState() {
  answerBtns.forEach(btn => {
    btn.disabled = false;
    btn.style.background = "";
  });
  nextBtn.style.display = "none";
}

showQuestion();