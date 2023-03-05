import { Request, Response } from "express"

import { providerService } from '../dao/services/provider.service'
import { ProviderModel } from '../dao/models/provider.model'



export const HandleGetProviders = async (req: Request, res: Response) => {
    try {

        const { page = 1, limit = 10 } = req.query

        let result = await providerService.getAll(page, limit)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleGetProviderById = async (req: Request, res: Response) => {
    try {

        const { spid } = req.params

        let result = await providerService.getById(spid)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleCreateProvider = async (req: Request, res: Response) => {
    try {

        const { provider, info } = req.body

        let obj: ProviderModel = { provider, info }
        let result = await providerService.create(obj)

        res.status(result.status).json(result)

    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleUpdateProvider = async (req: Request, res: Response) => {
    try {

        const { spid } = req.params
        const { provider, info } = req.body

        let obj: ProviderModel = { provider, info }
        let result = await providerService.update(spid, obj)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleDeleteProvider = async (req: Request, res: Response) => {
    try {

        const { spid } = req.params

        let result = await providerService.delete(spid)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}