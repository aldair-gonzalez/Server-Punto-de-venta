import { Schema, model, Model, Document, PaginateModel } from 'mongoose';
import paginate from "mongoose-paginate-v2"

import { ProviderModel } from '../models/provider.model'
import {
    DB_PROVIDERS_NAME
} from '../../config/config'



const providerSchema: Schema = new Schema<ProviderModel>({
    provider: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        uppercase: false
    },
    info: {
        type: String,
        required: true
    }
})

providerSchema.plugin(paginate)

interface ProviderDocument extends Document, ProviderModel {}

export const Provider = model<ProviderDocument, PaginateModel<ProviderDocument>>(DB_PROVIDERS_NAME, providerSchema)