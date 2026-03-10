// ===============================
// CONTADOR ANIMADO
// ===============================

const numeros = document.querySelectorAll(".numero");

if (numeros.length > 0) {

numeros.forEach(numero => {

let total = parseInt(numero.dataset.numero);
let count = 0;

let intervalo = setInterval(() => {

count++;
numero.innerText = count;

if (count >= total) {
clearInterval(intervalo);
}

}, 20);

});

}


// ===============================
// ANIMAÇÃO AO ROLAR PÁGINA
// ===============================

const reveals = document.querySelectorAll(".reveal");

if (reveals.length > 0) {

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if (entry.isIntersecting) {
entry.target.classList.add("active");
}

});

}, {
threshold: 0.2
});

reveals.forEach(el => observer.observe(el));

}


// ===============================
// LIGHTBOX DAS IMAGENS
// ===============================

const imagens = document.querySelectorAll(".projeto img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");

if (imagens.length > 0 && lightbox && lightboxImg) {

imagens.forEach(img => {

img.addEventListener("click", (e) => {

e.stopPropagation(); // impede abrir a galeria

lightbox.style.display = "flex";
lightboxImg.src = img.src;

});
});

lightbox.addEventListener("click", () => {

lightbox.style.display = "none";

});

}


// ===============================
// FORMULÁRIO WHATSAPP
// ===============================

const form = document.getElementById("formOrcamento");

if (form) {

form.addEventListener("submit", function (e) {

e.preventDefault();

let nome = document.getElementById("nome").value;
let telefone = document.getElementById("telefone").value;
let mensagem = document.getElementById("mensagem").value;

let texto = `Olá, gostaria de um orçamento.%0A
Nome: ${nome}%0A
Telefone: ${telefone}%0A
Mensagem: ${mensagem}`;

window.open(`https://wa.me/5531999999999?text=${texto}`);

});

}


// ===============================
// CARROSSEL ESTILO NETFLIX
// ===============================

function scrollGaleria(direcao) {

const carousel = document.getElementById("carousel");

if (!carousel) return;

const larguraItem = 270;

carousel.scrollBy({
left: direcao * larguraItem,
behavior: "smooth"
});

}


// ===============================
// GALERIA DE FOTOS POR PROJETO
// ===============================

// ===============================
// GALERIA PROFISSIONAL
// ===============================

const projetos = {

portao:[
"img/banner1.jpg",
"img/banner2.jpg",
"img/banner3.jpg"
],

corrimao:[
"img/banner2.jpg",
"img/banner3.jpg",
"img/banner4.jpg"
],

escada:[
"img/banner3.jpg",
"img/banner4.jpg",
"img/banner1.jpg"
],

estrutura:[
"img/banner4.jpg",
"img/banner1.jpg",
"img/banner2.jpg"
]

}

let projetoAtual = []
let indexAtual = 0

function abrirProjeto(nome){

const galeria = document.getElementById("galeriaProjeto")
const img = document.getElementById("galeriaImagem")

projetoAtual = projetos[nome]
indexAtual = 0

img.src = projetoAtual[indexAtual]

galeria.style.display = "flex"

}

function trocarImagem(direcao){

indexAtual += direcao

if(indexAtual < 0){
indexAtual = projetoAtual.length - 1
}

if(indexAtual >= projetoAtual.length){
indexAtual = 0
}

document.getElementById("galeriaImagem").src = projetoAtual[indexAtual]

}

function fecharProjeto(){

document.getElementById("galeriaProjeto").style.display = "none"

}


// fechar clicando fora

document.getElementById("galeriaProjeto").addEventListener("click", function(e){

if(e.target.id === "galeriaProjeto"){
fecharProjeto()
}

})


// fechar com ESC

document.addEventListener("keydown", function(e){

if(e.key === "Escape"){
fecharProjeto()
}

})

function abrirProjeto(nome) {

let galeria = document.getElementById("galeriaProjeto");
let container = document.getElementById("imagensProjeto");

if (!galeria || !container) return;

container.innerHTML = "";

projetos[nome].forEach(img => {

let imagem = document.createElement("img");

imagem.src = img;

container.appendChild(imagem);

});

galeria.style.display = "flex";

}


function fecharProjeto() {

const galeria = document.getElementById("galeriaProjeto");

if (galeria) {
galeria.style.display = "none";
}

}


// ===============================
// BANNER ROTATIVO
// ===============================

const banners = [
"img/banner1.jpg",
"img/banner2.jpg",
"img/banner3.jpg",
"img/banner4.jpg"
];

const hero = document.querySelector(".hero");

if (hero) {

let index = 0;

function trocarBanner() {

hero.style.backgroundImage = `url(${banners[index]})`;

index++;

if (index >= banners.length) {
index = 0;
}

}

trocarBanner();

setInterval(trocarBanner, 3500);

}