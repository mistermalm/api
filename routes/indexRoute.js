import express from 'express'
import { index } from '../controllers/index.js'

const router = express()
router.get('/', index)

export default router
