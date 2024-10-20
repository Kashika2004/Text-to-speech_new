const text = document.getElementById('textToConvert');
const convertBtn = document.getElementById('convertBtn');

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error-para');

    // Check if there's text and the speech synthesis is not speaking
    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = '';
        const newUtter = new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        convertBtn.textContent = 'Sound is playing...';
    } else if (!enteredText.trim().length) {
        error.textContent = 'Nothing to Convert';
    }

    setTimeout(() => {
        convertBtn.textContent = 'Play Converted Sound';
    }, 5000);
});
