const dotenv = require('dotenv');
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

dotenv.config({ path: `${__dirname}/../.env` });

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.nuntk.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
);

mongoose.connection.once('open', () => {
  console.log('Connected To Database');
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log('now listening for requests on port 4000');
});
