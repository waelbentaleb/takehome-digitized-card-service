import express from 'express'
import { isAuthorizedClient } from '../../middleware/auth'
const router = express.Router()

import cardRoute from './card/cardRoute'

router.use('/card/:userId', isAuthorizedClient, cardRoute)

export default router