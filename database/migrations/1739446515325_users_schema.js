'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UsersSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()  // Campo id (auto incremento)
      table.string('name', 255).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      table.uuid('key').unique().notNullable()  // UUID como chave única
      table.timestamps()  // Campos created_at e updated_at
    })
  }

  down () {
    this.drop('users')  // Quando desfizer a migration, ela remove a tabela users
  }
}

module.exports = UsersSchema
