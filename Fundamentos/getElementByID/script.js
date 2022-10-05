const paragraph = document.getElementById("paragraph");
paragraph.style.color = "blue";


/*Recupere o elemento que contém o título da página
  e faça algo com ele, como alterá-lo para o nome do 
  seu filme favorito. */

let titulo = document.getElementById("page-title").innerText = "Mudando nome"; // Muda o título da página. Captura ID
let second = document.getElementById("second-paragraph").innerText = "Altera o parágrafo para ficar mais legal";

document.getElementById("page-title").innerHTML = "Testando fazer dessa forma";