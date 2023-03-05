import { Router } from "express"

import {
    HandleGetCategoryById,
    HandleCreateCategory,
    HandleDeleteCategory,
    HandleGetCategories,
    HandleUpdateCategory
} from '../controllers/categories.controllers'



const router: Router = Router()


router.get('/',         HandleGetCategories)
router.post('/',        HandleCreateCategory)

router.get('/:cid',     HandleGetCategoryById)
router.put('/:cid',     HandleUpdateCategory)
router.delete('/:cid',  HandleDeleteCategory)

export default router