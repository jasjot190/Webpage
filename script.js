const questions = [
  {
    question: "What type of neural network is best for image recognition?",
    options: ["ANN", "CNN"],
    correct: "CNN",
  },
  {
    question: "What does a neuron in ANN do?",
    options: [
      "Stores data",
      "Calculates weighted input and applies activation",
    ],
    correct: "Calculates weighted input and applies activation",
  },
  {
    question: "Which layer in CNN detects features like edges?",
    options: ["Fully connected layer", "Convolutional layer"],
    correct: "Convolutional layer",
  },
  {
    question: "What does CNN stand for?",
    options: ["Convolutional Neural Network", "Central Neural Node"],
    correct: "Convolutional Neural Network",
  },
  {
    question: "Which neural network uses filters (kernels) to scan inputs?",
    options: ["ANN", "CNN"],
    correct: "CNN",
  },
];

let currentIndex = 0;
let score = 0; // Keep track of the score

function loadQuestion() {
  const quizForm = document.getElementById("quiz");
  const result = document.getElementById("quizResult");
  quizForm.innerHTML = "";
  result.textContent = "";

  const currentQ = questions[currentIndex];

  const questionEl = document.createElement("div");
  questionEl.innerHTML = `<p>${currentIndex + 1}. ${currentQ.question}</p>`;

  currentQ.options.forEach((option) => {
    const label = document.createElement("label");
    label.innerHTML = `
          <input type="radio" name="option" value="${option}" /> ${option}
        `;
    questionEl.appendChild(label);
    questionEl.appendChild(document.createElement("br"));
  });

  const submitBtn = document.createElement("button");
  submitBtn.textContent = "Submit";
  submitBtn.type = "submit"; // The button now acts like a submit button

  const skipBtn = document.createElement("button");
  skipBtn.textContent = "Skip";
  skipBtn.style.marginLeft = "10px";
  skipBtn.onclick = nextQuestion;

  quizForm.appendChild(questionEl);
  quizForm.appendChild(submitBtn);
  quizForm.appendChild(skipBtn);
}

function submitQuiz(event) {
  event.preventDefault(); // Prevent default form submission

  const selected = document.querySelector('input[name="option"]:checked');
  const result = document.getElementById("quizResult");

  const currentQ = questions[currentIndex];

  if (selected) {
    if (selected.value === currentQ.correct) {
      score++; // Increment score for correct answer
      result.textContent = "✅ Correct!";
      setTimeout(() => nextQuestion(), 800); // Next question after 0.8s
    } else {
      result.textContent = "❌ Incorrect! Try again or skip.";
    }
  } else {
    result.textContent = "⚠️ Please select an option.";
  }
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex >= questions.length) {
    document.getElementById(
      "quiz"
    ).innerHTML = `<p>🎉 Quiz Completed! Your score is: ${score} out of ${questions.length}</p>`;
  } else {
    loadQuestion();
  }
}

window.onload = loadQuestion;
