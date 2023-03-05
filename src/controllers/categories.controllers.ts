import { Request, Response } from "express"

import { categoryService } from '../dao/services/category.service'
import { CategoryModel } from '../dao/models/category.model'



export const HandleGetCategories = async ( req: Request, res: Response ) => {
    try {

        const { page = 1, limit = 10 } = req.query

        let result = await categoryService.getAll(page, limit)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleGetCategoryById = async ( req: Request, res: Response ) => {
    try {

        const { cid } = req.params

        let result = await categoryService.getById(cid)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleCreateCategory = async ( req: Request, res: Response ) => {
    try {

        const { category } = req.body

        let obj: CategoryModel = { category }

        let result = await categoryService.create(obj)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleUpdateCategory = async ( req: Request, res: Response ) => {
    try {

        const { cid } = req.params
        const { category } = req.body

        let obj: CategoryModel = { category }
        let result = await categoryService.update(cid, obj)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

export const HandleDeleteCategory = async ( req: Request, res: Response ) => {
    try {

        const { cid } = req.params

        let result = await categoryService.delete(cid)
        res.status(result.status).json(result)
        
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}