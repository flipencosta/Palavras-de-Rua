document.addEventListener("DOMContentLoaded", function() {
    const words = ["Noção", "Rainha", "Sentimento", "Repete", "Desejos", "Ninguém", "Tremendo", "Audiência", 
    "Solidão", "Ganhar", "Explique", "Comportamento", "Comando", "Atalho", "Conversa", "Pequeno", "Pressionando", 
    "Moldar", "Exemplo", "Guia", "Resolver","Separe", "Dados", "palavra3", "palavra1", "palavra2", 
    "palavra3","palavra1", "palavra2", "palavra3", "palavra1", "palavra2", "palavra3", "palavra1", "palavra2", "palavra3"]; 
    const timerElement = document.getElementById("timer");
    const wordElement = document.getElementById("word");
    const startButton = document.getElementById("startButton");
    const resultsElement = document.getElementById("results");
    let timeLeft = 60;
    let timer, wordTimer;
    let wordIndex = 0;

    startButton.addEventListener("click", startGame);

    function startGame() {
        startButton.disabled = true;
        resultsElement.innerHTML = "";
        timeLeft = 60;
        updateCircle();
        timerElement.textContent = timeLeft;
        timer = setInterval(countdown, 1000);
        wordTimer = setInterval(displayNextWord, 3000);
        displayNextWord();
    }

    function countdown() {
        if (timeLeft <= 0) {
            clearInterval(timer);
            clearInterval(wordTimer);
            startButton.disabled = false;
            resultsElement.innerHTML = "Tempo esgotado!";
        } else {
            timeLeft--;
            updateCircle();
            timerElement.textContent = timeLeft;
        }
    }

    function displayNextWord() {
        if (wordIndex >= words.length) {
            wordIndex = 0;
        }
        wordElement.textContent = words[wordIndex++];
    }

    function updateCircle() {
        const circle = document.querySelector('.circle');
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (timeLeft / 60) * circumference;
        circle.style.strokeDashoffset = offset;
    }
});
