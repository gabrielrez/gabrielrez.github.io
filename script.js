document.getElementById("calcular").addEventListener("click", function (event) {
  event.preventDefault();

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const num3 = parseFloat(document.getElementById("num3").value);

  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    alert("Por favor, insira números válidos.");
    return;
  }

  let resultado = (num3 * num2) / num1;
  resultado = resultado.toFixed(2);
  document.getElementById("resultado").textContent = resultado;
});
