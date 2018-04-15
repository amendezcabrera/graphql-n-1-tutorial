const express = require("express");
const router = express.Router();
const fs = require('fs');
const path = require("path");
const {graphqlExpress} = require('apollo-server-express');
const {graphiqlExpress} = require('apollo-server-express');
const resolvers = require("../server/graphql/resolvers");
const {makeExecutableSchema} = require('graphql-tools');
/* API GraphQL */
// Configuramos GraphQL para la API
const schemaFile = path.join(__dirname, '../server/graphql/schema.graphqls');
const typeDefs = fs.readFileSync(schemaFile, 'utf8');
const schema = makeExecutableSchema({typeDefs, resolvers});
const loaders = require('../server/loaders');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'GraphQL API'});
});

router.use(
    "/api",
    graphqlExpress(req => {
        return {
            schema: schema,
            context: {req, loaders}
        }
    })
);

router.use("/graphiql", graphiqlExpress({
    endpointURL: '/api'
}));

module.exports = router;