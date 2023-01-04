import gql from 'graphql-tag'

export const typeDefs = gql`
    type Query {
        listing: [Listing!]!
    }

    type Mutation {
        deleteListing(id: ID!): Listing!
    }

    type Listing {
        id: ID!
        title: String!
        image: String!
        address: String!
        price: Int!
        numOfGuests: Int!
        numOfBeds: Int!
        numOfBaths: Int!
        rating: Int!
    }
`
// ID get serialize as a String.
