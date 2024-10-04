
// Parte 1
/*
let atividades = document.getElementById("atividades");
atividades.innerHTML = "Minha primeira transformação"

let listaParagrafos = document.getElementsByTagName("p");
document.getElementsByClassName(".menu-principal")
document.getElementsByName("")
document.querySelector("p.principal")
*/


// Parte 2
/*
let resultados = document.getElementsByClassName("pagina-cabecalho");
console.log(resultados[0]);
resultados[0].style.color = "#000000";
resultados[0].style.textTransform = "uppercase";
*/

// Parte 3
/*
let resultados = document.getElementsByClassName("pagina-cabecalho");
let botao = document.createElement('button')
botao.innerHTML = "botão JS"
resultados[0].parentElement.appendChild(botao)
resultados[0].parentElement.removeChild(resultados[0])
*/

// Parte 4

let contador = 1;
const funcaoResposta = evento => {
    alert("Clicou " + contador + "x");
    contador++;
}

let resultados = document.getElementsByClassName("pagina-cabecalho");
resultados[0].addEventListener('click', funcaoResposta)


/*
const abreFechaMenu = evento => {
    menuPrincipal.classList.toggle('menu-principal--fechado');
}

let botao = document.querySelector('.menu-principal__btn');
let menuPrincipal = document.querySelector('.menu-principal');

botao.addEventListener('click', abreFechaMenu)

*/