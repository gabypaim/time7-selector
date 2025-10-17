// Mapeamento dos nomes para os nomes dos arquivos de imagem
const imageMap = {
    "Obito Uchiha": "obito.jpg",
    "Rin Nohara": "rin.jpg",
    "Kakashi Hatake": "kakashi.jpg"
};

const namepersonagem = document.getElementById('name-personagem');
const imagempersonagem = document.getElementById('imagem-personagem');
const cabelopersonagem = document.getElementById('cabelo-personagem');


document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('nomeselecionado');
    const cabelo = localStorage.getItem('cabeloselecionado');

    // 2. APLICA O TEMA (Chama a função definida em temas.js)
    // Isso muda as cores e fontes da página de acordo com o personagem.
    aplicarTema(name);

    namepersonagem.textContent = `${name}`;


    const imageFile = imageMap[name];
    if (imageFile) {
        imagempersonagem.src = imageFile;
        imagempersonagem.alt = name;
    } else {
        imagempersonagem.style.display = 'none';
    }


    cabelopersonagem.textContent = `Seu cabelo e ${cabelo}` ;
});