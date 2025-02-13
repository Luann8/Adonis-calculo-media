'use strict'

const User = use('App/Models/User')

class UserSeeder {
  async run () {
    // Lógica de populações de dados
    await User.create({
      name: 'Luann',
      email: 'luann@example.com',
      password: 'password',  // Lembre-se de hashear a senha!
      key: 'some-uuid-key',
    })
  }
}

module.exports = UserSeeder
