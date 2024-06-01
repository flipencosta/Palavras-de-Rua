document.addEventListener('DOMContentLoaded', () => {
    const progressElement = document.getElementById('progress');
    const daysCountElement = document.getElementById('days-count');
    const goalsElement = document.getElementById('goals');

    // Simulação de progresso (substitua pela lógica real)
    let progress = 50; // Exemplo de 50% de progresso
    progressElement.style.width = progress + '%';

    // Simulação de dias consecutivos (substitua pela lógica real)
    const lastVisit = localStorage.getItem('lastVisit');
    const currentDays = parseInt(localStorage.getItem('consecutiveDays'), 10) || 0;
    const today = new Date().toLocaleDateString();

    if (lastVisit === today) {
        daysCountElement.textContent = currentDays;
    } else {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        if (lastVisit === yesterday.toLocaleDateString()) {
            localStorage.setItem('consecutiveDays', currentDays + 1);
            daysCountElement.textContent = currentDays + 1;
        } else {
            localStorage.setItem('consecutiveDays', 1);
            daysCountElement.textContent = 1;
        }

        localStorage.setItem('lastVisit', today);
    }

    // Carregar metas do backend
    fetch('/api/goals')
        .then(response => response.json())
        .then(data => {
            goalsElement.textContent = data.goals;
        });
});

function updateGoals() {
    const newGoals = document.getElementById('new-goals').value;
    if (newGoals.trim()) {
        fetch('/api/goals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ goals: newGoals })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('goals').textContent = data.goals;
            document.getElementById('new-goals').value = '';
        });
    }
}