/*Por isso, hoje, eu vou te ensinar a desenvolver um programa simulando um desses sites. Ele deve pedir para o usuário responder 3 perguntas:

- Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando?
*/

let nome = prompt("Qual o seu nome?");
let idade = prompt("Quantos anos voce tem?");
let linguagem = prompt("Qual linguagem de programação você está estudando?");
let msg = `Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`;

if (nome || idade || linguagem != null) {
    document.getElementById("resultado").innerHTML = msg;
}

let escolha = prompt(`Você gosta de estudar ${linguagem}? Digite 1 para SIM ou 2 para NÃO`)

switch (escolha) {
    case '1' : 
        document.getElementById("escolha").innerHTML =
        "Muito bom! Contiue estudandoe você terá muito sucesso."
        break;
    case '2' : 
        document.getElementById("escolha").innerHTML = 
        "Ah que pensa... Já tentou aprender outras linguagens?"

    default:
        break;
}


