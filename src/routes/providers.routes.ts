import { Router } from "express"

import {
    HandleGetProviders,
    HandleUpdateProvider,
    HandleDeleteProvider,
    HandleCreateProvider,
    HandleGetProviderById
} from '../controllers/providers.controllers'



const router: Router = Router()


router.get('/',             HandleGetProviders)
router.post('/',            HandleCreateProvider)

router.get('/:spid',        HandleGetProviderById)
router.put('/:spid',        HandleUpdateProvider)
router.delete('/:spid',     HandleDeleteProvider)

export default router