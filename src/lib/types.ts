import { ObjectId, Collection } from 'mongodb'

export interface Listing {
    _id: ObjectId
    title: string
    image: string
    address: string
    price: number
    numOfGuests: number
    numOfBeds: number
    numOfBaths: number
    rating: number
}

// Collection interface, it represent a shape of mongo collection
export interface IDatabase {
    listings: Collection<Listing>
}
