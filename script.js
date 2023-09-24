function calcular() {
    var valor = parseFloat(document.getElementById("valor").value);
    var porcentagem = parseFloat(document.getElementById("porcentagem-gorgeta").value);
    var resultado = document.getElementById("resultado");
    
    if (isNaN(valor) || isNaN(porcentagem)) {
      resultado.textContent = "Por favor, insira valores válidos nos campos.";
    } else {
      var resultadofinal = (porcentagem * valor) / 100;
      resultado.textContent = "A gorjeta será: R$ " + resultadofinal.toFixed(2);
    }
  }
  