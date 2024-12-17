// Questions et réponses
const questions = [
    { question: "Où va-t-on habiter ?", answer: "Marchant Famine" },
    { question: "Comment s'appellera notre fille ?", answer: "Rose" },
    { question: "Comment aimes-tu que je t'appelle ?", answer: "Chaton" }
];

// Variables
let currentQuestion = 0;

const questionElement = document.getElementById("question");
const answerInput = document.getElementById("answer");
const submitButton = document.getElementById("submit");
const feedbackElement = document.getElementById("feedback");

// Afficher la question
function displayQuestion() {
    questionElement.textContent = `Question ${currentQuestion + 1} : ${questions[currentQuestion].question}`;
    feedbackElement.textContent = "";
    answerInput.value = "";
}

// Fonction pour vérifier la réponse
function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        feedbackElement.textContent = "Bonne réponse ! 🎉";
        feedbackElement.style.color = "green";

        currentQuestion++;
        if (currentQuestion < questions.length) {
            setTimeout(displayQuestion, 1000);
        } else {
            setTimeout(() => {
                document.body.innerHTML = `
                    <div style="text-align:center; margin-top: 20%; font-family: Arial, sans-serif; color: #e63946;">
                        <h1>Bravo, t'as encore gagné mon cœur ❤️</h1>
                        <img src="coeur.jpg" alt="Un cœur pour toi" style="width: 300px; margin-top: 20px;">
                    </div>
                `;
            }, 1000);
        }
    } else {
        feedbackElement.textContent = "Fais un effort, Tatiana d'Amour, je t'aime 💔";
        feedbackElement.style.color = "#e63946";
        answerInput.value = ""; // Vide le champ pour une nouvelle tentative
    }
}

// Initialisation
submitButton.addEventListener("click", checkAnswer);
displayQuestion();