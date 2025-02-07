//your JS code here. If required.
let buttonConatiner=document.getElementById("buttons");
const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
sounds.forEach(sound=>{
	const button=document.createElement("button");
	buttons.classList.add("btn");
	button.innerText=sound;
	const audio=new Audio(`sounds/${sound}.mp3`);
	button.addEventListener("click",()=>{
		stopAllSounds();
		audio.play
	});
	 buttonsContainer.appendChild(button);
});
const stopbutton=document.createElement("button");
stopbutton.classList.add("stop");
stopbutton.addEventListener("click",stopAllSounds);
buttonConatiner.appendChild(stopbutton);

function stopAllSounds() {
    document.querySelectorAll("audio").forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}