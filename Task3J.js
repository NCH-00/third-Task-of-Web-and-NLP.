
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (typeof SpeechRecognition === 'undefined') {
document.getElementById('output').innerHTML = "Speech recognition is not supported in this browser.";
} else {
const recognition = new SpeechRecognition();
recognition.continuous = true; 


recognition.onresult = function(event) {
const transcript = event.results[event.results.length - 1][0].transcript;
document.getElementById('output').innerHTML += transcript + "<br>";

const xhr = new XMLHttpRequest();
xhr.open("POST", "Task3P.php", true);
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
xhr.send("transcript=" + encodeURIComponent(transcript));
};

recognition.start();
}