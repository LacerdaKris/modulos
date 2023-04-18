//alternar tema entre escuro/claro

export function alterarTema() {
  //referências a variáveis com nome pra cores usadas em todo o style
  const root = document.querySelector(":root");
  const main = document.querySelector("main");

  if (main.dataset.tema === "escuro") {
    root.style.setProperty("--bg-color", "#ffffffc7");
    root.style.setProperty("--font-color", "#000000e8");
    root.style.setProperty("--primary-color", "mediumvioletred");
    main.dataset.tema = "claro";
  } else {
    root.style.setProperty("--bg-color", "#000000e8");
    root.style.setProperty("--font-color", "#ffffffc7");
    root.style.setProperty("--primary-color", "#f35cda");
    main.dataset.tema = "escuro";
  }
}
