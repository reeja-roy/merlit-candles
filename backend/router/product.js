import express from 'express'
import { createProduct, deleteProduct, getSingleProduct, listProduct, updateProduct } from '../controller/product.controller.js'
import { authMiddleware } from '../middleware/authMiddleware.js'

const Router = express.Router()

Router.post('/add',authMiddleware,createProduct)
Router.get('/',listProduct)
Router.put('/:id',updateProduct)
Router.delete('/:id',deleteProduct)
Router.get('/:id',getSingleProduct)


export default Router