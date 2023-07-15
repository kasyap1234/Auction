const express=require("express"); 
const {ApolloServer,gql}=require("apollo-server-express");
const {typeDefs}=require("./schema/type-defs");
const {resolvers}=require("./schema/resolvers");

const server=new ApolloServer({typeDefs,resolvers});
server.listen().then(({url})=>{
    console.log(`Server ready at ${url}`);
}
); 


