/*function xpto ( ) {
    let n = 0;
    return {next:
    function ( )
    {
    if (n < 10) {
    n += 2;
    return {value:n/2, done:false}}
    else {
    return {value: -1, done: true}}
    }}
}

var exemplo = "A";
outro = "A";
function minhaFuncao( ){
var exemplo = "B";
return exemplo;
}
function minhaFuncao2( ){
outro = "B";
return outro;
}
console.log(exemplo);
console.log(minhaFuncao( ));
console.log(outro);
console.log(minhaFuncao2);
console.log(outro);


let o = {one:1,two:2,three:3};
for(let p in o) console.log(p);


let total_divida = 1400;
function atualizar_divida(valor_recebido){
total_divida -= valor_recebido;
return total_divida;
}
for(var i=0;i<12;i++){
atualizar_divida(70);
}

print(total_divida);

*/

var str = "123456789";
var p = /[^5-7]/g;
var resultado = str.match(p);

console.log("result:" + resultado);