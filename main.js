const numeroSenha = document.querySelector('.parametro-senha__texto')
let tamnhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

const botoes = document.querySelectorAll('.paramaro-senha__botao');

botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentarTamanho;

function diminuirTamanho() {
if (tamanhoSenha > 1) {
    tamnhoSenha = tamnhoSenha - 1
}
numeroSenha.textContent = tamnhoSenha
gerarSenha();
}


function diminuirTamanho() {
if (tamanhoSenha < 20) {
    tamnhoSenha = tamnhoSenha + 1
}
numeroSenha.textContent = tamnhoSenha
gerarSenha();
}

const campoSenha = document. querySelector('#campo-senha');

const letrasMaisculas = 'ABCDEFGHIJKLNIEJRE';
const letrasMinusculas = 'abcdehksfhjddfhkdfk';
const numeros = '0123456789';
const simbolos = '%#$&&¨%*#@#%%#$';
gerarSenha();
