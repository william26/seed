const { Pool } = require('pg')

let dbPool

module.exports.init = () => {
  dbPool = new Pool({
    user: 'user',
    host: 'db',
    database: 'somedb',
    password: 'somepassword',
  })
}

module.exports.query = (query, variables) =>
  dbPool.connect()
    .then(client =>
      client.query(query, variables)
        .then(({ rows }) => {
          client.release()
          return rows
        })
        .catch(e => {
          client.release()
          return Promise.reject(e)
        })
    )
