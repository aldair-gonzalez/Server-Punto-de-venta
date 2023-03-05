import { Router } from "express"

import { Index } from '../controllers/controllers'



const router: Router = Router()


router.get('/', Index)

export default router