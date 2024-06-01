function updateProgress(audio, progress) {
    audio.addEventListener('timeupdate', () => {
        const percent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = percent + '%';
    });
}

const audio1 = document.getElementById('audio1');
const progress1 = document.getElementById('progress1');
updateProgress(audio1, progress1);

const audio2 = document.getElementById('audio2');
const progress2 = document.getElementById('progress2');
updateProgress(audio2, progress2);

const audio3 = document.getElementById('audio3');
const progress3 = document.getElementById('progress3');
updateProgress(audio3, progress3);