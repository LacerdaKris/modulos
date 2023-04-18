export default function teclado (ev) {
  ev.preventDefault();

  //teclas permitidas
  const permitidas = [
    "(",
    ")",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "%",
  ];

  if (permitidas.includes(ev.key)) {
    const tecla = ev.key;
    //incluir espaçamento caso forem os sinais, como ao clicar as teclas
    if (
      tecla === "(" ||
      tecla === ")" ||
      tecla === "+" ||
      tecla === "-" ||
      tecla === "*" ||
      tecla === "/"
    ) {
      input.value += " " + tecla + " ";
    } else {
      input.value += tecla;
    }
  }
  if (ev.key === "Backspace") {
    //do caracter inicial ao penultimo, e excluir o ultimo
    input.value = input.value.slice(0, -1);
    return;
  }
  if (ev.key === "Enter" || ev.key === "=") {
    calcular();
  }
};

import { calcular } from "./calcularResultado.js";