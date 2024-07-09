document.addEventListener("DOMContentLoaded", function () {
  // Carrega o cabeçalho
  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-placeholder").innerHTML = data;
    });

  // Carrega o rodapé
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
    });
});

function openAR(model) {
  // Abre uma nova janela com a visualização do modelo em AR
  window.open(`ar.html?model=${model}`, "_blank");
}