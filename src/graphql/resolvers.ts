import { ObjectId } from 'mongodb'
import { IDatabase, Listing } from '../lib/types'

export const resolvers = {
    Query: {
        listing: async (
            _root: undefined,
            _args: object,
            { db }: { db: IDatabase }
        ): Promise<Listing[]> =>
        //db are context inserted from expressMiddleware
        {
            return await db.listings.find({}).toArray()
        },
    },

    Mutation: {
        deleteListing: async (
            _root: undefined,
            { id }: { id: string },
            { db }: { db: IDatabase }
        ): Promise<Listing> => {
            const deleteRes = await db.listings.findOneAndDelete({
                _id: new ObjectId(id),
            })

            if (!deleteRes.value) {
                throw new Error('failed to delete listing')
            }

            return deleteRes.value
        },
    },

    Listing: {
        // title return listing.title which means it's a trivia resolver, don't need to be specific, it done automatically by graphql lib
        // title: (listing: Listing) => listing.title,
        // image: (listing: Listing) => listing.image,

        id: (listing: Listing): string => listing._id.toString(),
    },
}
