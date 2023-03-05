import { Product } from '../schemas/product.schema'

import { responseData, responseError } from '../../utils/response.utils'
import { ProductModel } from '../models/product.model'



class ProductService {

    async getAll (page: any, limit: any) {
        try {

            let result = await Product.paginate({}, {
                page, limit, lean: true
            })

            return responseData(200, result)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async getById (pid: string) {
        try {

            let exist = await Product.findById(pid).populate('category provider').lean()
            if(!exist) return responseError(404, null, 'Not Found')
            return responseData(200, exist)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async create (obj: ProductModel) {
        try {

            let exist = await Product.findOne({ code: obj.code })

            if(!(
                obj.code        &&
                obj.product     &&
                obj.category    &&
                obj.provider    &&
                obj.stock       &&
                obj.cost        &&
                obj.price
            )) return responseError(400, null, 'All fields are required')

            if(exist) return responseError(422, null, 'The product already exists')

            const product: ProductModel = { code: obj.code, product: obj.product, category: obj.category, provider: obj.provider, stock: obj.stock, cost: obj.cost, price: obj.price }
            let result: any = await Product.create<ProductModel>(product)
            return responseData(201, result)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async update (pid: string, obj: ProductModel) {
        try {

            let exist = await Product.findById(pid)
            if(!pid || !obj) return responseError(400, null, 'All fields are required')
            if(!exist) return responseError(404, null, 'Not found')

            exist.code      = obj.code      || exist.code
            exist.product   = obj.product   || exist.product
            exist.category  = obj.category  || exist.category
            exist.provider  = obj.provider  || exist.provider
            exist.stock     = obj.stock     || exist.stock
            exist.cost      = obj.cost      || exist.cost
            exist.price     = obj.price     || exist.price

            let result = await Product.updateOne({_id: pid}, exist)
            const { modifiedCount } = result
            if(!(modifiedCount > 0)) return responseError(202, null, 'Not modified')
            return responseData(200, exist)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async delete (pid: string) {
        try {

            let exist = await Product.findById(pid)
            if(!exist) return responseError(404, null, 'Not found')

            let result = await Product.deleteOne({_id: pid})
            const { deletedCount } = result
            if(!(deletedCount > 0)) return responseError(202, null, 'Not deleted')
            return responseData(200, result)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

}

export const productService: ProductService = new ProductService()