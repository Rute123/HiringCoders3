// Incluir biblioteca
const http = require('http');
//faz uma limpeza do dado url
const url = require('url');
const queryString = require('query-string');
//Inclui o file system
const fs = require('fs');

//Definição de endereço/ URL
const hostname = '127.0.0.1';
const port = 3000;

//Implementação da regra de negócio
const server = http.createServer((req, res) => {

  //Criar e Atualiza um usuario - id
   var resposta;
   const urlparse = url.parse(req.url, true);
   const params = queryString.parse(urlparse.search);

   if (urlparse.pathname == '/criar-atualizar-usuario'){
      //Salvar as informações que o usuário der de entrada na pasta users
      fs.writeFile('users/' + params.id + '.txt', JSON.stringify(params), function (err){ 
        if (err) throw err;
        console.log('Saved!');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end(resposta);
      });
      resposta= 'Usuário criado/atualizado com sucesso!';
   } 
   // Selecionar usuario
   else if (urlparse.pathname == '/selecionar-usuario'){
    fs.readFile('users/' + params.id + '.txt', function(err, data) {
      resposta = data;

      res.statusCode = 200;
      res.setHeader('Content-Type',  'application/json');
      res.end(resposta);
     });
   }
   
   // Remover o usuario
   else if (urlparse.pathname == '/remover-usuario'){
    fs.unlink('users/' + params.id + '.txt', function(err) {
      console.log('File deleted!');
      
      resposta = err ? 'Usuário não encontrado' : 'Usuario removido';

      res.statusCode = 204;
      res.setHeader('Content-Type', 'text/plain');
      res.end(resposta);
   });
 }

});

//Execução
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//Formato queryString
//http://localhost:3000/criar-atualizar-usuario?nome=rute&idade=80&id=1
//http://localhost:3000/criar-atualizar-usuario?nome=rute&idade=80&id=1
//http://localhost:3000/selecionar-usuario?nome=rute&idade=80&id=1
//http://localhost:3000/remover-usuario?nome=rute&idade=80&id=1