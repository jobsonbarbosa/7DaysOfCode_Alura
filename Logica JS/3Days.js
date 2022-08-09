let lista = [];
let cont = 0;
let resposta = 1;
let destino = prompt("Qual destino você quer seguir: 1 - FRONT-END | 2 - BACK-END");

    if(destino == 1){
        while(resposta == 1){
        lista[cont] = prompt("Informe qual tecnolgia voce quer aprender: ");
        cont++;
        resposta = prompt("Quer escolher outra Tecnologia? 1 - SIM  | 2 - NÃO ");
        console.log(lista);
}
   document.getElementById("frontend").innerHTML = lista
    }
