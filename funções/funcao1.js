/*01-Faça uma função que recebe um valor inteiro e verifica se o valor é par. A Função deve retornar
 se o número for par e 0 se for ímpar.
 Aluno: Davi Emanuel Baptista furlan*/
function imPar(valor) {
    if (valor % 2 == 0) {
        retorno = 1;
    }
    else {
        retorno = 0;
    }
    return retorno;
}
var retorno;
var teclado = require("prompt-sync")();
var n = parseInt(teclado("Digite o numero: "));
console.log(imPar(n));
