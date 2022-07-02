// Incluir biblioteca
const http = require('http');
//faz uma limpeza do dado url
var url = require('url');
const queryString = require('query-string');

//Definição de endereço/ URL
const hostname = '127.0.0.1';
const port = 3000;

//Implementação da regra de negócio
const server = http.createServer((req, res) => {
  //Pegar a pergunta na url - faz uma busca de acordo com url
  const params = queryString.parse(url.parse(req.url, true).search);
  
  //Verificação por parâmetro- a pergunta e escolhe a resposta
  let resposta;

  if(params.pergunta == 'melhor-filme'){
  resposta = 'Piratas do Caribe';
  } 
  else if(params.pergunta == 'melhor-tecnologia-backend'){
  resposta = 'nodejs';
  }
  else{
  resposta = 'Não sei, desculpe :(';
  }
  
// Retornar a resposta escolhida
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(params.pergunta); //resposta
});


//Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//FORMATO querystring
//http://localhost:3000/?pegunta=melhor-filme

/*---------------------
 PROVA
  let foo = function foo2 () { 

    console.log(foo === foo2) 
   
   } 
   
   foo();
 
const obj = { a: 1 } 

obj.a += 3 

console.log(obj.a);
  

function foo ({ a, b, c }) { 

  console.log(a, b, c);
 } 
 
 let a = 2 
 
 let b = 4 
 
 let c = 6 
 
 foo(2, 1, 3) 
 
 foo({ c, b, a }) 
 
 foo({ c: 10, b: c, a })

 foo();
 */