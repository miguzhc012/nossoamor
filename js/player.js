const btnPlay = document.getElementById("btnPlay");
const musica = document.getElementById("musica");

btnPlay.addEventListener("click", () => {
  if (musica.paused) {
    musica.play();
    btnPlay.textContent = "⏸️";
  } else {
    musica.pause();
    btnPlay.textContent = "▶️";
  }
});

// Tocar automaticamente quando entrar
window.addEventListener("load", () => {
  musica.play().catch(() => {
    console.log("O navegador bloqueou o autoplay.");
  });
});
