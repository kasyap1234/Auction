const {gql} = require('apollo-server-express');
const typeDefs=ggl`
type Painting{
    id:ID!
    title:String!
    description: String!
    startingPrice: Int!
    currentPrice: Int!
    image:String!

}
type FountainPen{
    id:ID!
    brand: String!
    model: String!
    description: String!
    price: Int!
    nibSize: String!
    startingPrice: Int!
    currentPrice: Int!
    image: String!

}

type Query{
    paintings:[Painting!]
    painting(id:ID!):Painting
    fountainPens:[FountainPen!]
    fountainPen(id:ID!):FountainPen

}
input PaintingInput{
    id:ID!
    title:String!
    description: String!
    startingPrice: Int!
    currentPrice: Int!
    image:String!

}
input FountainPenInput{
    id:ID!
    brand: String!
    model: String!
    description: String!
    price: Int!
    nibSize: String!
    startingPrice: Int!
    currentPrice: Int!
    image: String!
}

type Mutation{

    createPainting(
        title: String!
        description: String!
        startingPrice: Int!
        currentPrice: Int!
        image: String!
    ):Painting!
    createFountainPen(
        brand: String!
        model: String!
        description: String!
        price: Int!
        nibSize: String!
        startingPrice: Int!
        currentPrice: Int!
        image: String!
        ): FountainPen!
        updatePainting(
        input: PaintingInput!
        ): Painting!
        updateFountainPen(input: FountainPenInput!): FountainPen!
        placeBid(id: ID!, bid: Int!): Boolean!
        endAuction(id: ID!): Boolean!



}
`
module.exports={typeDefs};
