import 'dotenv/config'
import express, { Application } from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { connectDatabase } from './db'
import bodyParser from 'body-parser'
import { typeDefs, resolvers } from './graphql'

// ( async function () {
// const app = express()
const port = process.env.PORT || 3000

const mount = async (app: Application) => {
    const db = await connectDatabase()
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    })
    await server.start()

    app.use(bodyParser.json())
    app.use(
        '/api',
        expressMiddleware(server, { context: async () => ({ db }) })
    )
    //pass in express app in middleware, and specify where graphQL API lives

    app.listen(port)
    console.log(`listening on port ${port}`)

    // const listings = await db.listings.find({}).toArray()
    // console.log(listings)
}

mount(express())

// })();
