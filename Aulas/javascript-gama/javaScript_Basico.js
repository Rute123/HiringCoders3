/*  ---- OPERADORES----
var operador = 100;
var operando = 50;

var resultado = operando * operador

console.log(resultado);


---- CONDICIONAIS ----

var nome ='Maxsuelly';

if (nome === 'RT') {
    console.log('Legal seu nome é este mesmo!');
} else if( nome === 'Maxsuelly') {
    console.log('Tudo bem! Seu segundo nome também serve :)');
} else {
    console.log('Que pena! Seu nome não é RT');
}


--- REPETIÇÃO FOR ---
var numeroSorteado = 10;

var tabuada = 7;

for (var i = 0; i < 10; i++) {
    console.log('Valor de' + tabuada + 'X' + i + '=' + tabuada * i);
}

---- REPETIÇÃO WHILE -----
var achou = false;
var numeroSorteado = 10;
var possivelValor = 0;
while (!achou) {
    possivelValor += 1;
    if (numeroSorteado === possivelValor) {
        achou = true;
    } else {
        console.log('Possivel Valor não corresponde ao número sorteado' + possivelValor);
    }
}
*/