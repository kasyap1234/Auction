const express = require("express");
const {ApolloServer,gql}=require("apollo-server-express");
const {typeDefs}=require("./schema/type-defs");
const {resolvers}=require("./schema/resolvers");



const app = express();

async function startApolloServer() {
  const server=new ApolloServer({typeDefs,resolvers});


  await server.start(); 

  server.applyMiddleware({ app }); // Now, you can safely apply the middleware to Express.

  // Additional server setup or app configuration can go here.

  // Start your Express server.
  const port = 4000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/graphql`);
  });
}

startApolloServer().catch((err) => {
  console.error('Error starting Apollo Server:', err);
});









