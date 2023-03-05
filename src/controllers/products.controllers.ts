import { Request, Response } from "express"

import { productService } from '../dao/services/product.service'
import { ProductModel } from '../dao/models/product.model'



export const HandleGetProducts = async ( req: Request, res: Response ) => {
    try {

        const { page = 1, limit = 10 } = req.query

        let result = await productService.getAll(page, limit)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleGetProduct = async ( req: Request, res: Response ) => {
    try {

        const { pid } = req.params

        let result = await productService.getById(pid)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleCreateProduct = async ( req: Request, res: Response ) => {
    try {

        let { code, product, category, provider, stock, cost, price } = req.body

        if(!category) category = '6404fe6e21c727438882211a'
        if(!provider) provider = '6404fe9021c727438882211d'

        let obj: ProductModel = { code, product, category, provider, stock, cost, price }
        let result = await productService.create(obj)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleUpdateProduct = async ( req: Request, res: Response ) => {
    try {

        const { pid } = req.params
        const { code, product, category, provider, stock, cost, price } = req.body
        let obj: ProductModel = { code, product, category, provider, stock, cost, price }
        let result = await productService.update(pid, obj)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleDeleteProduct = async ( req: Request, res: Response ) => {
    try {

        const { pid } = req.params
        let result = await productService.delete(pid)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}