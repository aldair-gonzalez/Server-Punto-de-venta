import { Router } from "express"

import {
    HandleGetProducts,
    HandleCreateProduct,
    HandleGetProduct,
    HandleDeleteProduct,
    HandleUpdateProduct
} from '../controllers/products.controllers'



const router: Router = Router()


router.get('/',         HandleGetProducts)
router.post('/',        HandleCreateProduct)
router.get('/:pid',     HandleGetProduct)

router.delete('/:pid',  HandleDeleteProduct)
router.put('/:pid',     HandleUpdateProduct)

export default router