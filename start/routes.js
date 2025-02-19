const Route = use('Route');

// Root route
Route.get('/', async ({ response, request }) => {
  const numbers = request.input('numbers') // Pega o array de números enviado na query string

  // Verifica se o array tem exatamente 10 números
  if (numbers && numbers.length === 10) {
    // Calcula a média
    const total = numbers.reduce((acc, num) => acc + num, 0)
    const average = total / numbers.length

    return response.send({
      message: 'Servidor AdonisJS está rodando!',
      average: average
    })
  } else {
    return response.status(400).send({
      message: 'Envie exatamente 10 números na query string.'
    })
  }
})


// Using the controller with JWT middleware
Route.post('/calculate-average', 'CalculateAverage.metodo').middleware(['auth']);
