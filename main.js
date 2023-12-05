const audioParabens = new Audio("assets/xuxa-parabens.mp3");
const audioBoraTomarUma = new Audio("assets/bora-tomar-uma.mp3");
audioParabens.loop = true;

const button = document.querySelector(".sparkle-button");
button.addEventListener("click", (e) => {
    audioParabens.pause();
    audioBoraTomarUma.play();
})

audioBoraTomarUma.addEventListener("pause", (e) => {
    audioParabens.play();
})

const presente = document.querySelector(".box-body");
presente.addEventListener("click", (e) => {
    const modal = document.querySelector(".modal");
    presente.classList.add("clicado")
    modal.style.animation = "sumir .8s forwards 1.5s";
    audioParabens.play();
})