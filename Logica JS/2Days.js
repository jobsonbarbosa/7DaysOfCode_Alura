/*Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?
*/

let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos voce tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");

if (nome || idade || linguagem != null) {
    document.getElementById("resultado").innerHTML =
    `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`;
}

let escolha = prompt(`Você gosta de estudar ${linguagem}? <br> Digite 1 para SIM ou 2 para NÃO`);

if (escolha == 1) {
    document.getElementById("escolha").innerHTML =
    "Muito bom! Contiue estudandoe você terá muito sucesso."
} else {
    document.getElementById("escolha").innerHTML =
    "Ahh que pena... Já tentou aprender outras linguagens?"
}

