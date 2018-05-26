const express = require('express')

const app = express()

const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('./schema')

const dbService = require('./dbService')
const resolvers = require('./resolvers')

dbService.init()

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

app.use(bodyParser.json(), graphqlExpress({ schema }));

app.listen(80, () => {
  console.log('back-end listening on 80')
})
