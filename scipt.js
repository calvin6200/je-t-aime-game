const questions = [
    { question: "Où va-t-on habiter ?", answer: "marche-en-famenne" },
    { question: "Comment s'appellera notre fille ?", answer: "rose" },
    { question: "Comment aimes-tu que je t'appelle ?", answer: "chaton" }
  ];
  
  let currentQuestion = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    questionElement.textContent = `Question ${currentQuestion + 1} : ${questions[currentQuestion].question}`;
  }
  
  function validateAnswer() {
    const userInput = document.getElementById("answer").value.trim();
    const correctAnswer = questions[currentQuestion].answer.toLowerCase();
  
    if (userInput.toLowerCase() === correctAnswer) {
      currentQuestion++;
      if (currentQuestion < questions.length) {
        displayQuestion();
        document.getElementById("answer").value = ""; // Réinitialise le champ
      } else {
        document.body.innerHTML = `
          <div style="text-align: center; font-size: 24px; color: #d63384; margin-top: 50px;">
            Bravo, t'as encore gagné mon cœur ! ❤️<br>
            <img src="coeur.jpg" alt="Cœur" style="width: 300px; margin-top: 20px;">
          </div>`;
      }
    } else {
      document.getElementById("error-message").textContent = "Fais un effort, Tatiana d'Amour, je t'aime 💕";
    }
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();
  });