function criarCoracao() {
  const heart = document.createElement("div");
  heart.textContent = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw"; // posição aleatória na horizontal
  heart.style.top = "-20px"; // começa acima da tela
  heart.style.fontSize = Math.random() * 20 + 20 + "px"; // tamanho aleatório
  heart.style.animation = "cair 5s linear forwards";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Criar corações automaticamente a cada 500ms
setInterval(criarCoracao, 500);

const style = document.createElement("style");
style.textContent = `
@keyframes cair {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(100vh); opacity: 0; }
}
`;
document.head.appendChild(style);
