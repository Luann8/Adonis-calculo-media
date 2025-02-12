const Route = use('Route');

// Root route
Route.get('/', async ({ response }) => {
  return response.send({
    message: 'Servidor AdonisJS está rodando!',
    routes: [
      { method: 'POST', path: '/calculate-average', description: 'Calcula a média de um array de 10 números.' },
    ],
  });
});

// Using the controller with JWT middleware
Route.post('/calculate-average', 'CalculateAverage.metodo').middleware(['auth']);
