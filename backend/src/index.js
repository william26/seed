const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const dbService = require('./dbService');
dbService.init();

// const typeDefs = require('./schema');
// const resolvers = require('./resolvers');
// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers,
// });
// app.use(bodyParser.json(), graphqlExpress({ schema }));

app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

app.listen(80, () => {
  console.log('back-end listening on 80');
});
