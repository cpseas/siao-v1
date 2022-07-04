import { Router } from 'express'

import {
  register,
  login,
  getUser,
  validateEmail,
  changePassword,
} from '../controllers/userController.js'
import auth from '../middlewares/auth.js'

const router = Router()

router.post('/register', register)
router.post('/login', login)

router.get('/profile/:id', auth, getUser)
router.post('/forget-password', validateEmail)
router.post('/reset-password/:token', auth, changePassword)
router.get('/form-de-quejas/:id', auth, getUser)

export default router
