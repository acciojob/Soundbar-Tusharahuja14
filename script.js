let buttonContainer = document.getElementById("buttons");

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

let audioElements = {}; // Store audio elements

sounds.forEach(sound => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = sound;

    const audio = new Audio(`sounds/${sound}.mp3`);
    audioElements[sound] = audio; // Store the audio element

    button.addEventListener("click", () => {
        stopAllSounds();
        audio.play();
    });

    buttonContainer.appendChild(button);
});

// Create stop button
const stopButton = document.createElement("button");
stopButton.classList.add("stop");
stopButton.innerText = "stop";

stopButton.addEventListener("click", stopAllSounds);
buttonContainer.appendChild(stopButton);

// Stop all sounds
function stopAllSounds() {
    Object.values(audioElements).forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}
