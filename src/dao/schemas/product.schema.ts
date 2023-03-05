import { Schema, model, Document, PaginateModel } from 'mongoose';
import mongoosePaginate from "mongoose-paginate-v2"

import { ProductModel } from '../models/product.model'
import {
    DB_PRODUCTS_NAME,
    DB_CATEGORIES_NAME,
    DB_PROVIDERS_NAME
} from '../../config/config'



const productSchema = new Schema<ProductModel>({
    code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true
    },
    product: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: DB_CATEGORIES_NAME,
        required: true
    },
    provider: {
        type: Schema.Types.ObjectId,
        ref: DB_PROVIDERS_NAME,
        required: true
    },
    stock: {
        type: Number,
        default: 1,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

productSchema.plugin(mongoosePaginate)

interface ProductDocument extends Document, ProductModel {}

export const Product = model<ProductDocument, PaginateModel<ProductDocument>>(DB_PRODUCTS_NAME, productSchema)