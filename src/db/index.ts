import { MongoClient } from 'mongodb'
import { IDatabase } from '../lib/types'

const url = process.env.MONGO_URI

export const connectDatabase = async (): Promise<IDatabase> => {
    const client = await MongoClient.connect(url!)

    const db = client.db('tiny-mongo-typescript')

    return {
        listings: db.collection('test_listings'),
    }
}
