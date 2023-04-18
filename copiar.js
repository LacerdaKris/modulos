export function copiarResultado (ev) {
  const botao = ev.currentTarget;
  //trocar texto e cor da borda/letras conforme classe sucesso do css
  if (botao.innerText === "Copiar") {
    botao.innerText = "Copiado!";
    botao.classList.add("sucesso");
    //copiar o texto pra area de transferência
    navigator.clipboard.writeText(resultado.value);
  } else {
    botao.innerText = "Copiar";
    botao.classList.remove("sucesso");
  }
};