/*  ----DICAS DE COMO DESENVOLVER EM JS----

let minhaProfissao = 'Designer';
let meuNome = 'Rute';
let meuSobrenome = 'Maxsuelly';

//SEM template string
//console.log('Olá, meu nome é' + meuNome + 'minha profissão é:' + minhaProfissao);

//COM template string (crase `´)
console.log(`Olá, meu nome é ${meuNome} ${meuSobrenome} e minha profissão é ${minhaProfissao}`)


// ARROW function
const multiplication = function(x, y) {
return x * y;
};

//Simplifica e concatena funções (pra quando for mt grande o código)
const divisor = (x, y) => {
    return x / y;
};


//FUNÇÃO ANÔNIMA
const objeto = () => ({ nome: 'Rute', sobrenome: 'Maxsuelly' });


//Exemplo de spread (...) uma atribuição em lista
let lista = [1, 2, 5];
let listaIncluir = [3, 4];

const listResult = [1, 2, ...listaIncluir, 5];
console.log(listResult);


// EXEMPLO DE CÓPIA COM SPREAD
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

console.log(arr); // arr permanece inalterado
console.log(arr2); // arr2 - o clone, se torna [1, 2, 3, 4]
*/

//Requisição de DADOS de forma desconstruída
const pessoa = {
    nome: 'Rute',
    sobrenome: 'Maxsuelly',
    idade: '27',
    profissao: 'Designer',
};

//DESESTRUCT
let { nome, sobrenome, idade, profissao } = pessoa;

console.log(nome, sobrenome, idade, profissao);