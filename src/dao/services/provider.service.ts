import { Provider } from '../schemas/provider.schema'

import { ProviderModel } from '../models/provider.model'
import { responseError, responseData } from '../../utils/response.utils';



class ProviderService {

    async getAll (page: any, limit: any) {
        try {

            let result = await Provider.paginate({}, {
                page, limit, lean: true
            })

            return responseData(200, result)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async getById (spid: string) {
        try {

            let exist = await Provider.findById(spid)
            if(!exist) return responseError(404, null, 'Not Found')
            return responseData(200, exist)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async create (obj: ProviderModel) {
        try {

            let exist = await Provider.findOne({ provider: obj.provider })

            if(!(
                obj.provider &&
                obj.info
            )) return responseError(400, null, 'All fields are required')

            if(exist) return responseError(422, null, 'This provider already exists')

            const provider: ProviderModel = { provider: obj.provider, info: obj.info }

            let result: any = await Provider.create<ProviderModel>(provider)

            return responseData(201, result)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async update (spid: string, obj: ProviderModel) {
        try {

            let exist = await Provider.findById(spid)
            if(!spid || !obj) return responseError(400, null, 'All fields are required')
            if(!exist) return responseError(404, null, 'Not found')

            exist.provider  = obj.provider  || exist.provider
            exist.info      = obj.info      || exist.info

            let result = await Provider.updateOne({_id: spid}, exist)
            const { modifiedCount } = result
            if(!(modifiedCount > 0)) return responseError(202, null, 'Not modified')
            return responseData(200, exist)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }

    async delete (spid: string) {
        try {

            let exist = await Provider.findById(spid)
            if(!exist) return responseError(404, null, 'Not found')

            let result = await Provider.deleteOne({_id: spid})
            const { deletedCount } = result
            if(!(deletedCount > 0)) return responseError(202, null, 'Not deleted')
            return responseData(200, result)

        } catch (error) {
            return responseError(500, error, 'Internal Server Error')
        }
    }
    
}

export const providerService: ProviderService = new ProviderService()