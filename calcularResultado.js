export {calcular, apagar}

function calcular() {
  let valorInput = input.value;
  //verificar quando há "%" no input
  if (valorInput.indexOf("%") !== -1) {
    //verificar se está num cálculo com + ou - antes do percentual
    //se nao tiver, apenar trocar % por /100
    const converterPercComSoma = valorInput.match(
      /(\d+(\.\d+)?)\s*\+\s*(\d+(\.\d+)?)\s*%/
    );
    const converterPercComSubtração = valorInput.match(
      /(\d+(\.\d+)?)\s*\-\s*(\d+(\.\d+)?)\s*%/
    );
    if (converterPercComSoma) {
      const valorAntesSinal = parseFloat(converterPercComSoma[1]);
      const valorAntesPercentual = parseFloat(converterPercComSoma[3]) / 100;
      const percentualSomado =
        valorAntesSinal + valorAntesSinal * valorAntesPercentual;
      valorInput = valorInput.replace(
        converterPercComSoma[0],
        percentualSomado
      );
    } else if (converterPercComSubtração) {
      const valorAntesSinal = parseFloat(converterPercComSubtração[1]);
      const valorAntesPercentual =
        parseFloat(converterPercComSubtração[3]) / 100;
      const percentualSubtraido =
        valorAntesSinal - valorAntesSinal * valorAntesPercentual;
      valorInput = valorInput.replace(
        converterPercComSubtração[0],
        percentualSubtraido);
    } else {
      valorInput = valorInput.replace("%", "/100")
    }
  }
  //começa como valor e estilo da classe "erro" no CSS
  resultado.value = "ERRO";
  resultado.classList.add("erro");
  //calcular o input exatamente pelo que está digitado com o método "eval"
  const valorResultado = eval(valorInput);
  //se dá certo, mostra o resultado e remove o "erro"
  resultado.value = valorResultado;
  resultado.classList.remove("erro");
}

//apagar ao apertar botão "C"
function apagar () {
  input.value = "";
  input.focus();
  resultado.value = "";
  resultado.classList.remove("erro");
  //voltar ao normal o botão "copiar", caso esteja como "copiado"
  const copiar = document.getElementById("copiar");
  copiar.innerText = "Copiar";
  copiar.classList.remove("sucesso");
};