import { ObjectId } from "mongoose"

export interface ProductModel {
    code        : string
    product     : string
    category    : ObjectId
    provider    : ObjectId
    stock       : number
    cost        : number
    price       : number
}