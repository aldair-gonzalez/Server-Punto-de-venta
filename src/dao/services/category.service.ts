import { Category } from '../schemas/category.schema'

import { responseData, responseError } from '../../utils/response.utils'
import { CategoryModel } from '../models/category.model'



class CategoryService {

    async getAll (page: any, limit: any) {
        try {

            let result = await Category.paginate({}, {
                page, limit, lean: true
            })

            return responseData(200, result)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async getById (cid: string) {
        try {

            let exist = await Category.findById(cid)
            if(!exist) return responseError(404, null, 'Not Found')
            return responseData(200, exist)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async create (obj: CategoryModel) {
        try {

            let exist = await Category.findOne({ category: obj.category })

            if(!(
                obj.category
            )) return responseError(400, null, 'All fields are required')

            if(exist) return responseError(422, null, 'The category already exists')

            const category: CategoryModel = { category: obj.category }
            let result: any = await Category.create<CategoryModel>(category)
            return responseData(201, result)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async update (cid: string, obj: CategoryModel) {
        try {

            let exist = await Category.findById(cid)
            if(!cid || !obj) return responseError(400, null, 'All fields are required')
            if(!exist) return responseError(404, null, 'Not found')

            exist.category  = obj.category  || exist.category

            let result = await Category.updateOne({_id: cid}, exist)
            const { modifiedCount } = result
            if(!(modifiedCount > 0)) return responseError(202, null, 'Not modified')
            return responseData(200, exist)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async delete (cid: string) {
        try {

            let exist = await Category.findById(cid)
            if(!exist) return responseError(404, null, 'Not found')

            let result = await Category.deleteOne({_id: cid})
            const { deletedCount } = result
            if(!(deletedCount > 0)) return responseError(202, null, 'Not deleted')
            return responseData(200, result)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

}

export const categoryService: CategoryService = new CategoryService()