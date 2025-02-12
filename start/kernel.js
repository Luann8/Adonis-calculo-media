'use strict'

/** @type {import('@adonisjs/framework/src/Server')} */
const Server = use('Server')

/*
|--------------------------------------------------------------------------
| Global Middleware
|--------------------------------------------------------------------------
| Global middleware são executados em cada requisição HTTP, mas apenas
| quando as rotas correspondem.
|
*/
const globalMiddleware = [
  'Adonis/Middleware/BodyParser',  // Middleware para analisar o corpo da requisição
  'Adonis/Middleware/Session',     // Middleware de sessão
  'Adonis/Middleware/Shield',      // Middleware de segurança
  'Adonis/Middleware/AuthInit',    // Middleware para inicializar a autenticação
  'App/Middleware/ConvertEmptyStringsToNull',  // Middleware para converter strings vazias em null
  'App/Middleware/ValidateNumbers'  // Middleware para validar os números da requisição
]

/*
|--------------------------------------------------------------------------
| Named Middleware
|--------------------------------------------------------------------------
| Named middleware são definidos como objetos chave/valor para adicionar
| middleware de forma condicional em rotas específicas ou grupos de rotas.
| 
| Exemplo:
| {
|   auth: 'Adonis/Middleware/Auth'
| }
|
| Como usar:
| Route.get().middleware('auth')
|
*/
const namedMiddleware = {
  auth: 'Adonis/Middleware/Auth',  // Middleware para autenticação
  guest: 'Adonis/Middleware/AllowGuestOnly'  // Middleware para permitir apenas convidados
}

/*
|--------------------------------------------------------------------------
| Server Middleware
|--------------------------------------------------------------------------
| Server-level middleware são executados mesmo quando a rota para uma URL
| específica não está registrada. Usado para recursos como `assets estáticos`
| e `CORS`.
|
*/
const serverMiddleware = [
  'Adonis/Middleware/Static',  // Middleware para assets estáticos
  'Adonis/Middleware/Cors'     // Middleware para CORS (Cross-Origin Resource Sharing)
]

Server
  .registerGlobal(globalMiddleware)  // Registra middleware global
  .registerNamed(namedMiddleware)    // Registra middleware nomeado
  .use(serverMiddleware)             // Usa middleware do servidor
