import { alterarTema } from "./alterarTema.js";
import teclado from "./ativarTeclado.js";
import { calcular, apagar } from "./calcularResultado.js";
import { copiarResultado as copiar } from "./copiar.js";

const input = document.getElementById("input");
const resultado = document.getElementById("resultado");

//alternar tema entre escuro/claro
document.getElementById("temaBotão").addEventListener("click", alterarTema);

//adicionar valor dos botoes ao input
document.querySelectorAll(".botões").forEach(function (cadaBotao) {
  cadaBotao.addEventListener("click", function () {
    const valor = cadaBotao.dataset.valor;
    input.value += valor;
    input.focus();
  });
});

//apagar ao apertar botão "C"
document.getElementById("C").addEventListener("click", apagar);

//ativar botão "="
document.getElementById("igual").addEventListener("click", calcular);

//função com evento para o botão copiar
document.getElementById("copiar").addEventListener("click", copiar);

//limitar valores que podem ser digitados e ativar funções pelo teclado
input.addEventListener("keydown", teclado);
