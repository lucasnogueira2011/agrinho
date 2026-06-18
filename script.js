const brilho = document.getElementById("brilho");
const fonte = document.getElementById("fonte");

// Controle de brilho
brilho.addEventListener("input", () => {
  document.body.style.filter = `brightness(${brilho.value}%)`;
});

// Controle de fonte
fonte.addEventListener("input", () => {
  document.body.style.fontSize = fonte.value + "px";
});
