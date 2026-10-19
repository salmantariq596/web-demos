// Elements
const startButton = document.getElementById('start-button');
const stopButton = document.getElementById('stop-button');
const output = document.getElementById('output');
const transcriptInput = document.getElementById('transcript-input');

// Web Speech API setup
let recognition;
if ('webkitSpeechRecognition' in window) {
    recognition = new webkitSpeechRecognition();
} else {
    alert('Your browser does not support the Web Speech API. Please try Google Chrome.');
    throw new Error('Web Speech API not supported');
}

recognition.lang = 'ur-PK';
recognition.interimResults = true;
recognition.continuous = true;

// Event Handlers
recognition.onstart = () => {
    output.textContent = 'Listening...';
};

recognition.onresult = (event) => {
    const transcript = Array.from(event.results)
        .map(result => result[0].transcript)
        .join('');
    output.textContent = transcript;
    transcriptInput.value = transcript; // Save the transcript to the hidden input
};

recognition.onerror = (event) => {
    output.textContent = `Error: ${event.error}`;
};

recognition.onend = () => {
    output.textContent += '\nStopped listening.';
};

// Button Events
startButton.addEventListener('click', () => {
    recognition.start();
    startButton.classList.add('hidden');
    stopButton.classList.remove('hidden');
});

stopButton.addEventListener('click', () => {
    recognition.stop();
    startButton.classList.remove('hidden');
    stopButton.classList.add('hidden');
});
