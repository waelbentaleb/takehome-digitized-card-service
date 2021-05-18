import express from 'express'
import { create, getAll, getById, update, remove } from './cardController'

const router = express.Router()

router.post('/', create)
router.get('/', getAll)
router.get('/:cardId', getById)
router.put('/:cardId', update)
router.delete('/:cardId', remove)

export default router