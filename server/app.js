import schema from './schema'
const express = require('express');
const graphqlHTTP = require('express-graphql');
const db = require('mongoose');
const cors = require('cors');

const app = express();

// allow cross-origin requests
app.use(cors());

// connect to mlab database
// make sure to replace my db string & creds with your own
db.connect('mongodb://viyan:viyan@ds261929.mlab.com:61929/gqldb')
db.connection.once('open', () => {
    console.log('conneted to database');
});

// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(3000, () => {
    console.log('now listening for requests on port 3000');
});
