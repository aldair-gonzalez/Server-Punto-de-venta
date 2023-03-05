import { Schema, model, Document, PaginateModel } from 'mongoose';
import mongoosePaginate from "mongoose-paginate-v2"

import { CategoryModel } from '../models/category.model'
import {
    DB_CATEGORIES_NAME
} from '../../config/config'



const categorySchema = new Schema<CategoryModel>({
    category: {
        type: String,
        required: true
    }
})

categorySchema.plugin(mongoosePaginate)

interface CategoryDocument extends Document, CategoryModel {}

export const Category = model<CategoryDocument, PaginateModel<CategoryDocument>>(DB_CATEGORIES_NAME, categorySchema)