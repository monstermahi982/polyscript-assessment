import express from 'express'
const router = express.Router();
import userController from '../controller/userController'

router.post('/login', userController.login);
router.post('/register', userController.register);

export default router