const numeroSenha = document.querySelector('.parametro-senha__texto')
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaisculas = 'ABCDEFGHIJKLNIEJRE';
const letrasMinusculas = 'abcdehksfhjddfhkdfk';
const numeros = '0123456789';
const simbolos = '%#$&&¨%*#@#%%#$';
const botoes = document.querySelectorAll('.paramaro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelector('.checkbox');
const forcaSenha = document.querySelector ()


botoes[0].onclick = diminuirTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuirTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha = tamanhoSenha - 1
    }
    numeroSenha.textContent = tamanhoSenha
    geraSenha();
}


function diminuirTamanho() {
    if (tamanhoSenha < 20) {
        tamnhoSenha = tamanhoSenha + 1
    }
    numeroSenha.textContent = tamanhoSenha
    geraSenha();
}

for (i = 0; i < checkbox.clientHeight; i++) {
    checkbox[i].onclick = geraSenha;
}


geraSenha();

function geraSenha() {
    let alfabeto = '';
    if (checkbox[0].checked)
        alfabeto = alfabeto + letrasMaisculas;

if (checkbox[1].checked){ 
        alfabeto = alfabeto + letrasMinusculas;
 }
if (checkbox[2].checked){ 
        alfabeto = alfabeto + numeros;
}
if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos;
 }

let senha = '';
for (let i = 0; i < tamanhoSenha; i++) {
    let numeroAleatorio = Math.ramdom()
}





}





