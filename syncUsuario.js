//Este aquivo 
const Usuario = require('./src/models/Usuario');//cria uma variável chamada Usuario e atribui o arquivo Usuario.js a ela;

async function sync() {

    await Usuario.sync();

    console.log('Tabela Usuarios criada com sucesso!'); //Esta função assincrona aguarda o  o arquivo Usuario.js sincronizar a tabela usuario e imprime no cosole: .

} //Tabela usuario criada com sucesso. 

sync();

