import express from 'express'
const router = express.Router()
import { getNewById, getNews, deleteNews, updateNews, createNews } from '../controllers/newsControllers.js'
import { protect } from '../middleware/authMiddleware.js'


router.route('/').get(getNews).post(protect, createNews)
router.route('/:id').get(getNewById).delete(protect, deleteNews).put(protect, updateNews)

export default router