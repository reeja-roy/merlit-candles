import express from 'express'
import { authMiddleware } from '../middleware/authMiddleware.js'
import { addCart, listCart } from '../controller/cart.controller.js'

const router = express.Router()

router.post('/add',authMiddleware,addCart)
router.get('/',authMiddleware,listCart)

export default router