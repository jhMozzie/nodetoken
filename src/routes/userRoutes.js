import express from 'express'
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js'

const router = express.Router();

router.post('/', createUser)
router.get('/', getAllUsers)
router.get('/', getUserById)
router.put('/', updateUser)
router.delete('/', deleteUser)

export default router;

