function checkAnswer(answer) {
    const result = document.getElementById("result");
    const message = document.getElementById("message");
    const heart = document.getElementById("heart");

    if (answer === "vrai") {
        // Bonne réponse
        message.innerHTML = "Bonne réponse, je t'aime vraiment, Tatiana ❤️❤️❤️ (C'est nouveau pour moi)";
        message.style.color = "green";
        heart.classList.remove("hidden"); // Affiche la photo
    } else {
        // Mauvaise réponse
        message.textContent = "Tu te trompes Tatiana 😢";
        message.style.color = "red";
        heart.classList.add("hidden"); // Cache la photo
    }

    result.classList.remove("hidden"); // Affiche le résultat
}