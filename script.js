const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseover", function () {
  // Gera uma posição aleatória para o botão
  const randomX = Math.floor(Math.random() * 90);
  const randomY = Math.floor(Math.random() * 90);

  // Aplica a nova posição ao botão
  noBtn.style.position = "absolute";
  noBtn.style.top = `${randomY}%`;
  noBtn.style.left = `${randomX}%`;
});
