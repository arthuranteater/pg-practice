let connection = require('./knexfile')[process.env.DATABASE_URL || 'development']
let run = require('knex')(connection)


