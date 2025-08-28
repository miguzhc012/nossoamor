function atualizarContador() {
  // Data em que começaram a namorar (troque pela sua)
  const dataInicio = new Date("2025-07-29T00:00:00");

  const agora = new Date();
  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").innerText =
    `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos 💕`;
}

setInterval(atualizarContador, 1000);
