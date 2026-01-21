document.body.addEventListener("click", () => {
    const music = document.getElementById("bg-music");
    music.volume = 0.4;
    music.play().catch(() => {
        console.log("Audio blocked until interaction");
    });
});
