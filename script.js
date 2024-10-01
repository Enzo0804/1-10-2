/*Exemplo 1 - Imprimindo cada linha sem loop

console.log(10)
console.log(9)
console.log(8)
console.log(7)
console.log(6)
console.log(5)
console.log(4)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log("Feliz Ano Novo")
*/

/*Exemplo 02 - imprimindo cada linha com loop while */

/*let contador = 0;

while (contador < 1000) {
    console.log(contador);
    contador += 20;
}

console.log("Feliz Ano Novo")*/

//solicita um numero ao usuario

let numeroinicial = parseInt(prompt("Digite um numero pra iniciar a contagem de dois em dois"));

// verifica se o numero é válido

if(!isNaN(numeroinicial) && numeroinicial >=0) {
    let contador = numeroinicial;
    // inicia a contagem
    while (contador <= 10) {
        console.log(contador);
        contador += 2; // Incrementa de dois em dois
    }
    // Imrpime uma mensagem de finalização
    console.log("Feliz Ano Novo!");
    }else{
        // Imprime uma mensagem de erro
        console.log("Numero invalido, Por favor, digite um numero valido maior ou igaul a 0.");
        }    
