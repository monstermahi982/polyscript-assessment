import express from 'express'
const router = express.Router();
import userController from '../controller/userController'
import productController from '../controller/productController'

router.post('/login', userController.login);
router.post('/register', userController.register);
router.get('/products', productController.getAll);
router.get('/product/:id', productController.getOne);
router.post('/product', productController.add);
router.put('/product/:id', productController.update);
router.delete('/product/:id', productController.delete);

export default router