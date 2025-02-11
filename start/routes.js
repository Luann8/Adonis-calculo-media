const Route = use('Route');

// Rota para o caminho raiz
Route.get('/', async ({ response }) => {
  return response.send({
    message: 'Servidor AdonisJS está rodando!',
    routes: [
      { method: 'POST', path: '/calculate-average', description: 'Calcula a média de um array de 10 números.' },
    ],
  });
});


Route.post('/calculate-average', async ({ request, response }) => {
  try {
    const numbers = request.input('numbers');

    // Validação: Verifica se é um array de 10 números inteiros
    if (!Array.isArray(numbers) || numbers.length !== 10) {
      return response.status(400).send({
        error: 'O corpo da requisição deve conter um array de exatamente 10 números inteiros.',
      });
    }

    if (!numbers.every(Number.isInteger)) {
      return response.status(400).send({
        error: 'Todos os elementos do array devem ser números inteiros.',
      });
    }

    // Calcula a média
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;

    return response.send({
      message: 'Média calculada com sucesso.',
      average,
    });
  } catch (error) {
    return response.status(500).send({
      error: 'Erro interno no servidor.',
      details: error.message,
    });
  }
});
